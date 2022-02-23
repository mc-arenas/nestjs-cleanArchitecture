import { Table, Column, Model, Unique, Default } from 'sequelize-typescript';

@Table
export class User extends Model {
  @Column
  name: string;

  @Column
  role: string;

  @Unique(true)
  @Column
  email: string;

  @Column
  password: string;

  @Default(true)
  @Column
  active: boolean;
}
