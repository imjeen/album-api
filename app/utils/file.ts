import * as path from 'path';
import * as fs from 'fs';
import UtilDate from './date';

export default class UtilFile {
    // 异步
    static saveLocalFile(file: any) {
        const name = new UtilDate().format('yyyyMMdd_hhmmsss') + '__' + file.originalname;
        const target_path = path.join(__dirname, '../../../temp/uploads/');
        try {
            fs.accessSync(target_path);
        } catch (e) {
            fs.mkdirSync(target_path);
        }

        console.log('path: ', target_path);
        fs.writeFile(path.join(target_path, name), file.buffer, err => {
            err && console.error('uploadPhoto errerrerr:::', err);
        });
        return name;
    }
}
