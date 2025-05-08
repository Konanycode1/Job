import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { env } from 'config/env.validation';
import { User } from 'features/User/core/schema/user.schema';
import { UserService } from 'features/User/core/use-case/user.service';

export type JwtPayload = {
  id: string;
  email: string;
};

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    private readonly configService: ConfigService,
    private readonly userService: UserService,
  ) {
    const extractJwtFromCookie = (req) => {
      let token = null;
      if (req && req.cookies) {
        token = req.cookies['access_token'];
      }
      return token || ExtractJwt.fromAuthHeaderAsBearerToken()(req);
    };
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: env.JWT_SECRET, // Utilisez une clé secrète sécurisée
    });
  }

  async validate(payload: JwtPayload) {
    const user = await this.userService.findOne(payload.id);
    if (!user) throw new UnauthorizedException('Please log in to continue');
    return {
      id: payload.id,
      email: payload.email,
    };
  }
}
