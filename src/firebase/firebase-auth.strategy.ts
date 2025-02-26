import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { Strategy, ExtractJwt } from 'passport-firebase-jwt';
// import * as firebaseConfig from './firebase.config.json';
import * as firebase from 'firebase-admin';

import * as dotenv from 'dotenv';

dotenv.config();

// check if the environment is production or development
let firebaseConfig;
try {
  firebaseConfig =
    process.env.NODE_ENV === 'production'
      ? require('/etc/secrets/firebase.config.json')
      : require(process.cwd() + '/src/firebase/firebase.config.json');
} catch (error) {
  console.error(
    'Firebase config file not found. Please ensure firebase.config.json exists in the correct location.',
  );
  console.error(
    'For development: Place it in the same directory as firebase-auth.strategy.ts',
  );
  console.error('For production: Place it in /etc/secrets/');
  throw error;
}

const firebase_params = {
  type: firebaseConfig.type,
  projectId: firebaseConfig.project_id,
  privateKeyId: firebaseConfig.private_key_id,
  privateKey: firebaseConfig.private_key,
  clientEmail: firebaseConfig.client_email,
  clientId: firebaseConfig.client_id,
  authUri: firebaseConfig.auth_uri,
  tokenUri: firebaseConfig.token_uri,
  authProviderX509CertUrl: firebaseConfig.auth_provider_x509_cert_url,
  clientC509CertUrl: firebaseConfig.client_x509_cert_url,
};

@Injectable()
export class FirebaseAuthStrategy extends PassportStrategy(
  Strategy,
  'firebase-auth',
) {
  private defaultApp: any;
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    });
    this.defaultApp = firebase.initializeApp({
      credential: firebase.credential.cert(firebase_params),
    });
  }
  async validate(token: string) {
    const firebaseUser: any = await this.defaultApp
      .auth()
      .verifyIdToken(token, true)
      .catch((err) => {
        console.log(err);
        throw new UnauthorizedException(err.message);
      });
    if (!firebaseUser) {
      throw new UnauthorizedException();
    }
    return firebaseUser;
  }
}
