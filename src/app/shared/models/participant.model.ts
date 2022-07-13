import { UserModel } from './user.model';
import { PersonModel } from './person.model';

export interface ParticipantModel {
  payer: UserModel;
  person: PersonModel;
}
