import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('despesas')
export class Despesa {
  @PrimaryGeneratedColumn()
  id!: number | string;

  @Column()
  descricao!: string;

  @Column()
  data!: Date;

  @Column()
  data_efetivacao!: Date;

  @Column({
    type: "decimal",
    transformer: {
      to(value: any) { return value},
      from(value: any) { return parseFloat(value) }
    }
  })
  valor!: number;

  @Column()
  valor_pago!: number;

  @Column()
  pago!: boolean;
}