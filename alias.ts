import * as moduleAlias from 'module-alias';
import * as path from 'path';
moduleAlias.addAliases({
    '@src': path.resolve(__dirname, './src'),
});
