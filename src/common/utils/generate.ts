import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { jwtConstants } from 'common/constants/jwtConstant';
// Initialisation du service JWT
const jwtService = new JwtService();

// Fonction pour générer un token JWT
export const generateToken = (
  payload: object,
  configService: ConfigService,
): string => {
  // console.log(payload);
  const jwtTime = configService.get('JWT_EXPIRATION_TIME') || '15m';
  // console.log(jwtTime);
  return jwtService.sign({ ...payload }, { secret:jwtConstants.secret, expiresIn: jwtTime });
};

export const refreshTokenExpired = (
  payload: object,
  configService: ConfigService,
): string => {
  const secret = configService.get('JWT_SECRET');
  const jwtTime = '7d';
  return jwtService.sign({ ...payload }, { secret:jwtConstants.secret, expiresIn: jwtTime });
};


// Fonction pour vérifier un token JWT
export const verifyToken = (
  token: string,
  configService: ConfigService,
): string | object => {
  try {
    const decoded =  jwtService.verify(token, { secret: jwtConstants.secret });
    return decoded;
  } catch {
    throw new Error('Invalid token');
  }
};

