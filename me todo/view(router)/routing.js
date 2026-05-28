const express = require('express');
const ctrl=require('../controls/control_fns');
/*.Router:acts like.use but only for routing,
essentailly makes a connection map for all rotues (eg:bst)
,makeing it faster to chose which route for which  */
const router = express.Router();

router.post('/create',ctrl.add);
router.get('/get_all',ctrl.get_all);
router.get('/getby/:id',ctrl.getby_id);
router.delete('/delby/:id',ctrl.delby_id);
router.put('/updateby/:id',ctrl.udtby_id);
router.delete('/del_all',ctrl.del_all);

module.exports = router;