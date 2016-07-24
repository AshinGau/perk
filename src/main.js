var Vue = require('./utils/vue.js'),
	VueRouter = require('./utils/vue-router.js'),
	VueResource = require('./utils/vue-resource.js'),
	$ = require('./utils/jquery.js');

Vue.use(VueRouter);
Vue.use(VueResource);

import Skeleton from './Skeleton.vue';
import Article from './Article.vue';

var router = new VueRouter();
var PerkApp= Vue.extend(Skeleton);
router.map({
	'/': {
		component: Article
	},
	'/article': {
		component: Article
	}
});

router.start(PerkApp, '#PerkApp');