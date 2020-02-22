import * as path from 'path';
import { createConnection, Connection, ConnectionOptions } from 'typeorm';
import * as ormconfig from '../../ormconfig.json';

const options: ConnectionOptions = {
    ...ormconfig,
    type: 'mysql',
    entities: [`${path.join(__dirname, '../')}/entity/**/**.{ts,js}`],
};

export default async function connect(): Promise<Connection> {
    return await createConnection(options);
}
