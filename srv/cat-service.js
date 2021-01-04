const textBundle = require('./util/textBundle');

module.exports = (srv) => {
    srv.before('CREATE', 'Orders', (req) => {
        const locale = req.user.locale;
        const bundle = textBundle.getTextBundle(locale);
        const payload = req.data;
        

        if(payload.count > 10){
            req.error(400, bundle.getText("exceedOrderLimit"));
        }
    });
}