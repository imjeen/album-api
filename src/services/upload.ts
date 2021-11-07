import UtilFile from '@src/utils/file';

export class UploadService {
    static async post(file: any) {
        // TODO: validation (mimetype: 'image/jpeg')
        const resultname = UtilFile.saveLocalFile(file);
        console.log('result name', resultname);
        return {
            resultname,
            // filename: file.originalname,
            size: file.size,
            // fieldname: file.fieldname,
        };
    }
}
