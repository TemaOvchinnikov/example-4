import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreateLoginDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(255)
  password: string;
}
