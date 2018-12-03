var express = require('express');
var router = express.Router();
const homeController = require('./controller/home');


/**
 * @api {get} /api/home/banner 获取首页banner列表
 * @apiDescription 获取banner
 * @apiName getBanner
 * @apiGroup Home
 * @apiParam {string} dataType 类型
 * @apiSuccess {json} data
 * @apiSuccessExample {json} Success-Response:
 *  {
 *      "code" : "1",
 *      "data" : []
 *  }
 * @apiSampleRequest http://localhost:3000/api/home/banner
 * @apiVersion 1.0.0
 */
router.get('/home/banner', homeController.banner)

module.exports = router;

/**
 * MVC全名是Model View Controller，是模型(model)－视图(view)－控制器(controller)的缩写
 * 路由：一个地址对应一个controller  
 * model: 模型，用来操作数据库，也叫数据模型
 * controller：控制器用来控制数据，输出数据（输出到view）
 * view: 显示数据
 */
