const express = require('express');
const ctrl=require('../controls/control_fns');
/*.Router:acts like.use but only for routing,
essentailly makes a connection map for all rotues (eg:bst)
,makeing it faster to chose which route for which  */
const router = express.Router();

router.post('/ce',ctrl.add);
router.get('/ga',ctrl.get_all);
router.get('/gb/:id',ctrl.getby_id);
router.delete('/db/:id',ctrl.delby_id);
router.put('/ub/:id',ctrl.udtby_id);
router.delete('/da',ctrl.del_all);

module.exports = router;