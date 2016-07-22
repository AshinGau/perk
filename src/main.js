import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import $ from "jquery";

Vue.use(VueRouter);
Vue.use(VueResource);

import AppHeader from './AppHeader.vue';
import Article from './Article.vue';

var router = new VueRouter();
var PerkApp = Vue.extend(AppHeader);
router.map({
	'/article': {
		component: Article
	}
})

router.start(PerkApp, '#PerkApp');

var $AppHeader = $('#AppHeader');
$(window).scroll(function(){
	var top = $(window).scrollTop();
	if(top > 5){
		$AppHeader.addClass('nail');
	}else{
		$AppHeader.removeClass('nail');
	}
})

