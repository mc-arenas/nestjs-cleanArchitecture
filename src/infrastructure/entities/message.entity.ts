import { Table, Column, Model, Unique, Default } from 'sequelize-typescript';

@Table
export class Message extends Model {
  @Column
  userId: number;

  @Column
  receiverUserId: number;

  @Column
  content: string;
}
