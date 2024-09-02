import { User } from "../entities/User";

export interface ILoginRepository{
  returnIfTimeBlockedPass(currentTime: Date, email: string): Promise<User>;
  unblockUser(email: string): Promise<void>;
  login(email: string, password: string): Promise<User>;
  returnUserBasedEmail(email: string): Promise<User>;
  resetAttemptsUser(email: string): Promise<void>;
  returnUserAttempts(email: string): Promise<number>;
  incrementLoginAttemptUser(email: string): Promise<void>;
  verifyIfUserIsBlocked(email: string): Promise<User>;
  blockAccountCertainPeriod(blockedAt: Date, blockUntil: Date, email: string): Promise<void>;
}