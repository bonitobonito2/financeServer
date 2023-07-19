import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  Entity,
} from "typeorm";

@Entity("user")
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", name: "first_name" })
  firstName: string;

  @Column({ type: "varchar", length: 50, name: "last_name" })
  lastName: string;

  @Column("timestamp without time zone", { name: "birth_date" })
  date: Date;

  @Column("integer", { name: "personal_number" })
  personalNumber: number;

  @Column("integer", { name: "phone" })
  phone: number;

  @Column({ type: "varchar", length: 50, name: "email" })
  email: string;
}
