import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';

export class CreateAuthenticationDto {
  @IsNotEmpty()
  @IsEmail()
  email: String;

  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(255)
  firstName: String;

  @IsNotEmpty()
  @MinLength(1)
  @MaxLength(255)
  lastName: String;

  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(255)
  password: String;
}
