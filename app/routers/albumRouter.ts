import * as express from 'express';
import { AlbumController } from '../controllters/albumController';
const router = express.Router();

router.post('/', AlbumController.createAlbum);
router.get('/', AlbumController.getAlbumList);
router.get('/:id', AlbumController.getAlbumById);
router.put('/', AlbumController.updateAlbum);
router.delete('/', AlbumController.deleteAlbumById);

module.exports = router;
