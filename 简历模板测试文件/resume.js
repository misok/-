//var resume = {
////							"theme" : "geometry",
//
//	"contact" : {
//
//      "qq" : "aaaaaa","mobile" : "13724323001","wechat" : "cccccc",
//		"weibo" : "bbbbbb",
//		"email" : "djsasewr@sina.com"
//	},
//	"basic" : {
//		"name" : "王平王平王平",
//		"sex" : "男",
//		"birthday" : "1992-12-10",
//		"hometown" : "四川-其它"
//	},
//	"education" : [
//		{
//			"major" : "计算机网络工程",
//			"university" : "南京理工大学",
//			"gpa" : "5",
//			"dateBegin" : "2012\/9",
//			"dateEnd" : "",
//			"degree" : "本科",
//			"school" : "xx学院"
//		},
//		{
//			"major" : "计算机网络工程",
//			"university" : "南京理工大学",
//			"gpa" : "5",
//			"dateBegin" : "2012\/9",
//			"dateEnd" : "2016\/7",
//			"degree" : "本科",
//			"school" : "xx学院"
//		},
//		{
//			"major" : "计算机网络工程",
//			"university" : "南京理工大学",
//			"gpa" : "5",
//			"dateBegin" : "2012\/9",
//			"dateEnd" : "2012\/7",
//			"degree" : "硕士",
//			"school" : "xx学院"
//		},
//		{
//			"major" : "计算机网络工程",
//			"university" : "南京理工大学",
//			"gpa" : "5",
//			"dateBegin" : "2012\/9",
//			"dateEnd" : "2012\/7",
//			"degree" : "博士",
//			"school" : "xx学院"
//		}
//	],
//	"skill" : [
//		{
//			"rank" : "5",
//			"title" : "挖掘机推土机叉车救护车各种车辆"
//		},
//		{
//			"rank" : "3",
//			"title" : "空手道"
//		},
//		{
//			"rank" : "1",
//			"title" : "javascript"
//		}
//	],
//	"certification" : [
//		{
//			"title" : "四级",
//			"rank" : "123分"
//		},
//		{
//			"title" : "全国计算机等级资格考试（NCRE）",
//			"rank" : "123分"
//		}
//	],
//	"experience" : [
//		{
//			"title" : "游戏测试",
//			"dateEnd" : "至今",
//			"type" : "实习",
//			"dateBegin" : "2012\/1",
//			"description" : "唐岩在网易工作期间利用职务之便，获取网易提供的各种信息、技术资源，私创“陌陌”，从而窃取网易公司商业利益，丧失基本职业操守。利用公司对其信任，向其妻(张思川)做创始人的四度(北京)广告有限公司输送上百万元经济利益。还因个人作风问题2007年被中国警方拘留10日。"
//		},
//		{
//			"title" : "吃饭",
//			"dateEnd" : "2016\/1",
//			"type" : "校园",
//			"dateBegin" : "2012\/1",
//			"description" : ""
//		}
//	],
//	"honor" : [
//		{
//			"date" : "2012\/1",
//			"title" : "英语四级(CET-4) <530> 我们很好很快了思密达",
//			"description" : ""
//		},
//		{
//			"date" : "2011\/1",
//			"title" : "英语六级(CET-6) <550>",
//			"description" : ""
//		}
//	],
//	"version" : "",
//	"videoAvatarUrl" : "http://v.xiaomo.com/ava/0/0e/edd821384890c853bb1723c55ab484d2_ava_02335688.mp4",
//	"tag" : {
//		"hobby" : [
//			"美食",
//			"电影",
//			"古典乐",
//			"购物",
//			"动漫",
//			"旅行",
//			"养狗"
//		],
//		"default" : [
//
//		],
//		"personality" : [
//			"急性子",
//			"乐观",
//			"很怕生",
//			"有点怕生",
//			"外向",
//			"自来熟",
//			"爱说话",
//			"不乐观",
//			"慢性子"
//		]
//	},
//	"videoIntroPosterUrl" : "http://cdn.xiaomo.com/cv/img/rank_nomore.png",
//	"videoIntroUrl" : "",
//	"photoUrl" : "",
//	"introduction" : "忘掉曾有这个世界，有你；" +
//	"哀悼谁又曾有过爱恋，" +
//	"落花似地落了去；" +
//	"忘掉，这些泪点里的情绪。" +
//	"、到那一天一切都不存留，" +
//	"比一闪光，一息风更少痕迹；" +
//	"你也要忘了我，曾经在这个世界里活过 ",
//	"expectation" : {
//		"jobType" : [
//			"兼职",
//			"实习",
//			"全职"
//		],
//		"location" : [
//			"呼和浩特被",
//			"百特而言们",
//			"乌鲁木齐市"
//		],
//		"industry" : [
//			"土木",
//			"教师",
//			"医护"
//		]
//	}
//}


//根据输入的日期例如1992-12-10计算出年龄、几零后、和星座
function isAndroid()
{
	return typeof(mowei) != "undefined";
}

function checkDate(date){
	return (new Date(date).getDate()==date.substring(date.length-2));//看是否填写到具体日期
}

function getAge(date){
	if(checkDate(date))
	{
		//return Math.floor((new Date() - new Date(date)) / 86400 / 365 / 1000) + "岁";
		return ((new Date()).getFullYear() -  (new Date(date).getFullYear())) + "岁";
	}
	else
	{
		return date;
	}
}

function getGeneration(date){
	if(checkDate(date))
	{
		var y = (new Date(date)).getYear();
		var y1 = Math.floor(y % 1900 % 100 / 10)//对数进行下舍入
		var y2 = y % 1900 % 100 % 10 >= 5 ? 5 : 0;
		return y1 + "" + y2 + "后";
	}
	else
	{
		return "";
	}
}

function getAstro(date){
	if(checkDate(date))
	{
		var m = (new Date(date)).getMonth()+1,
			d = (new Date(date)).getDate();
		return "魔羯水瓶双鱼牡羊金牛双子巨蟹狮子处女天秤天蝎射手魔羯".substr(m*2-(d<"102223444433".charAt(m-1)- -19)*2,2) + "座";
	}
	else
	{
		return '';
	}
}

//根据家乡信息获取是哪里人
function getHomeTown()
{
	if(resume.basic.hometown)
	{
		var province = resume.basic.hometown.substring(0, resume.basic.hometown.indexOf('-'));
		var city = resume.basic.hometown.slice(resume.basic.hometown.indexOf('-') + 1);
		if(city == "其他" || city == "其它")
		{
			return province + "人";
		}
		else
		{
			return city + "人";
		}
	}
	else
	{
		return "";
	}
}

//获取基本信息模块
function getBasicInfo()
{
	$("#realName").text(resume.basic.name ? (Math.min(resume.basic.name.length, 10) == 10 ? resume.basic.name.substring(0, 10) + "..." : resume.basic.name) : "名字没写");
	$("#sex").text(resume.basic.sex ? resume.basic.sex + "生" : "?").addClass(resume.basic.sex == "男" ? "m" : "f");

	var bday = resume.basic.birthday;
	$("#age").text(getAge(bday));
	$("#astro").text(getAstro(bday));

	resume.basic.hometown && $("#homeTown").text(getHomeTown());	
}

//判断是否有对象
function hasResume(property)
{
	switch(typeof(resume[property]))
	{
		case "undefined":
			return false;
		case "string":
			return resume[property] != "";
		case "number":
			return true;
		case "object":
			for(var name in resume[property])
			    {
			        if(resume[property].hasOwnProperty(name))
			        {
			            return true;
			        }
			    }
			return false;		
	}
}

//获取3秒视频
function getAvatarVideo()
{
	if(hasResume("videoAvatarUrl"))
	{
		if(resume.videoAvatarPosterUrl != "")
		{
			$("#videoAvatar").attr("poster", resume.videoAvatarPosterUrl);//用户点击播放前或下载时显示的图像
		}
		else
		{
			$("#videoAvatar").attr("poster", "./theme/default/holder.png");
			
		}
		
		$("#videoAvatar").attr("src", resume.videoAvatarUrl);
		
		$("#videoAvatar")[0].onended = function() {
			if(hasResume("videoAvatarUrl"))//当媒介已到达结尾时运行的脚本  此处为重复播放
			{
				$("#videoAvatar")[0].play();
			}
		};
	}
}

//获取形象照
function getAvatarImage()
{
	if(hasResume("photoUrl"))
	{
		$("#photoAvatar").attr("src", resume.photoUrl + (resume.photoUrl.substring(0, 4).toLowerCase() == "http" ? "!300" : ""));//照片存储在up云上
	}
	else if(hasResume("videoAvatarPosterUrl"))
	{
		$("#photoAvatar").attr("src", resume.videoAvatarPosterUrl);
	}
	else
	{
		$("#photoAvatar").attr("src", "./theme/default/holder.png");
	}
	$("#photoAvatar").off().error(function(){
		$(this).attr("src", "http://cdn.xiaomo.com/cv/theme/default/holder.png");
	});
}

//获取形象
function getAvatar()
{
	getAvatarImage();

	//Android
	if(isAndroid()) {
		$("#videoAvatar").css("z-index","50").hide();
		$("#photoAvatar").css("z-index","100").show();
	}
	//iOS
	else
	{
		getAvatarVideo();
		
		//如果有视频
		if(hasResume("videoAvatarUrl"))
		{
			$("#videoAvatar").css("z-index","50").hide();
			$("#photoAvatar").css("z-index","100").show();
			
			if($("#videoAvatar")[0].paused)
			{
				$("#videoAvatar")[0].play();
			}

			//视频事件
			$("#videoAvatar")[0].onplay = function() {//媒介已就绪后播放的脚本
				$("#videoAvatar").css("z-index","100").show(50);
				$("#photoAvatar").css("z-index","50").hide(50);
			};
		}
		else
		{
			$("#videoAvatar").css("z-index","50").hide();
			$("#photoAvatar").css("z-index","100").show();
		}
	}	
}

//获取标签
function getTags()
{
	var tags = $("<ul class=\"tags\"></ul>");
	
	for(var i=0;i< resume.tag.default.length; i++)//默认
	{
		$("<li class=\"d\">" + resume.tag.default[i] + "</li>").appendTo(tags);
	}
	for(var i=0;i< resume.tag.personality.length; i++)//自定义
	{
		$("<li class=\"p\">" + resume.tag.personality[i] + "</li>").appendTo(tags);
	}
	for(var i=0;i< resume.tag.hobby.length; i++)//兴趣
	{
		$("<li class=\"h\">" + resume.tag.hobby[i] + "</li>").appendTo(tags);
	}			
	
	tags.appendTo($("#tags"));//动态插入标签
}

//获取介绍视频
function getIntroVideo()
{
	$("#videoIntro").attr("src", resume.videoIntroUrl);
	
	if(hasResume("videoIntroPosterUrl")) {
		$("#videoIntro").attr("poster", resume.videoIntroPosterUrl);
	}
	else
	{
		$("#videoIntro").attr("poster", "./theme/default/holder-intro.png");
	}
	
	$("#videoIntro").off().error(function(){
		$(this).attr("poster", "http://cdn.xiaomo.com/cv/theme/default/holder.png");
	});
	
	$(".video_intro").show();
	
	//视频事件
	$("#videoIntro")[0].onended = function() {
		if(hasResume("videoAvatarUrl"))
		{
			$("#videoAvatar")[0].play();
		}
	};
	$("#videoIntro")[0].onpause = function() {
		if(hasResume("videoAvatarUrl"))
		{
			$("#videoAvatar")[0].play();
		}
	};
}

//获取自我介绍
function getIntroduction()
{
	//获取介绍文字
	$(".text_intro").text(hasResume("introduction") ? resume.introduction : "");


	//Android
	if(isAndroid()) {
		
		if(hasResume("videoIntroPosterUrl"))
		{
			$(".video_intro").html("<img id=\"posterIntro\" src=\"" + resume.videoIntroPosterUrl + "\" />");
		}
		else
		{
			$(".video_intro").hide();
		}
		$("#posterIntro").click(function() {
			mowei.playIntroVideo(resume.videoIntroUrl);//安卓视频播放比较复杂
		});
	}
	//iOS
	else
	{
		if(hasResume("videoIntroUrl"))
		{
			getIntroVideo();
		}
		else
		{
			$(".video_intro").hide();
		}
	}

}

//获取期望工作
function getTarget()
{
	//工作性质
	var jt = "";
	for(var j=0; j < resume.expectation.jobType.length; j++)
	{
		jt += resume.expectation.jobType[j] + ( j < resume.expectation.jobType.length - 1 ?  " / " : "");
	}
	$("#jobTypes").text(jt);
	
	//工作城市
	var loc = "";
	for(var k=0; k < resume.expectation.location.length; k++)
	{
		loc += resume.expectation.location[k].substring(resume.expectation.location[k].indexOf("-") + 1) + ( k < resume.expectation.location.length - 1 ?  " / " : "");
	}
	$("#locations").text(loc);
	
	//期望行业
	var ind = "";
	for(var m=0; m < resume.expectation.industry.length; m++)
	{
		ind += resume.expectation.industry[m] + ( m < resume.expectation.industry.length - 1 ?  " / " : "");
	}
	$("#industries").text(ind);	
}

//获取学历描述
function getDegreeDescription(education)
{
	var underGraduate = new Date(education.dateEnd + "/1") > new Date();
	if(education.degree && education.degree == "硕士" && underGraduate)
	{
		return "研究生在读";
	}
	else if(education.degree && education.degree == "博士" && underGraduate)
	{
		return "博士生在读";
	}
	else if(education.degree && education.degree == "其他" && underGraduate)
	{
		return education.degree;
	}
	else if(education.degree && underGraduate)
	{
		return education.degree + "在读";
	}

	return education.degree;	
}

//获取教育经历
function getEducations()
{
	if($.isArray(resume.education) && resume.education.length > 0)
	{
		$("#colleges").html("");
		var edu = resume.education;
		for(var n=0; n < edu.length; n++)
		{
			if(edu[n].university != "")
			{
				var li = $("<li></li>");
				var y = $("<div class=\"year\"></div>"); 
				y.append(edu[n].dateBegin + " - " + edu[n].dateEnd).appendTo(li);
				
				edu[n].degree && $("<span class=\"degree\">" + getDegreeDescription(edu[n]) + "</span>").appendTo(y);

				$("<div class=\"name\">" + edu[n].university + "</div>").appendTo(li);
				edu[n].school && $("<div class=\"school\">" + edu[n].school + "</div>").appendTo(li);
				edu[n].major && $("<div class=\"major\">" + edu[n].major + "</div>").appendTo(li);
				edu[n].gpa && $("<div class=\"gpa\">绩点: " + edu[n].gpa + "</div>").appendTo(li);
				
				li.appendTo($("#colleges"));
			}
		}
		
		edu.length > 0 && $("<li>.</li>").appendTo($("#colleges"));
	}
	else
	{
		$("#edu").hide();
	}
}


//获取经历
function getExperiences()
{
	if($.isArray(resume.experience) && resume.experience.length > 0)
	{
		$("#experiences").html("");
		var exp = resume.experience;
		for(var d=0; d < exp.length; d++)
		{
			if(exp[d].title != "" || exp[d].description != "")
			{
				var li = $("<li></li>");
				var y = $("<div class=\"year\"></div>"); 
				if(exp[d].dateBegin != "")
				{
					y.append(exp[d].dateBegin);
				}
				if(exp[d].dateEnd != "" && exp[d].dateEnd != exp[d].dateBegin)
				{
					y.append((y.html() != "" ? (exp[d].dateEnd != "至今" ? " - " : " ") : "") + exp[d].dateEnd)
				}
				y.appendTo(li);
				exp[d].type && $("<span class=\"type " + (exp[d].type == "校园" ? "xy" : "sx") + "\">" + exp[d].type + "</span>").appendTo(y);
				exp[d].title && $("<div class=\"name\">" + exp[d].title + "</div>").appendTo(li);
				exp[d].description && $("<div class=\"description\">" + exp[d].description + "</div>").appendTo(li);
	
				
				li.appendTo($("#experiences"));
			}
		}
		
		exp.length > 0 && $("<li>.</li>").appendTo($("#experiences"));
	}
	else
	{
		$("#exp").hide();
	}		
}

//获取技能
function getSkills()
{
	var hasSkill = $.isArray(resume.skill) && resume.skill.length > 0;
	var hasCertification = $.isArray(resume.certification) && resume.certification.length > 0;
	
	$("#skills").html("");
	
	if(hasCertification)
	{
		var cert = resume.certification;
		for(var h=0; h < cert.length; h++)
		{
			if(cert[h].title != "")
			{
				var tr = $("<tr></tr>");
				$("<td class=\"title" + (cert[h].title.length > 10 ? " s" : "") + "\">" + cert[h].title + "</td>").appendTo(tr);
				var level = $("<td class=\"level\">" + cert[h].rank + "</td>");
				level.appendTo(tr);			
				tr.appendTo($("#skills"));
			}
		}
	}
	
	if(hasSkill && resume.theme != 'wood' && resume.theme != 'geometry')
	{
		//alert('no');
		var ski = resume.skill;
		for(var h=0; h < ski.length; h++)
		{
			if(ski[h].title != "")
			{
				var tr = $("<tr></tr>");
				$("<td class=\"title" + (ski[h].title.length > 10 ? " s" : "") + "\">" + ski[h].title + "</td>").appendTo(tr);
				var level = $("<td class=\"level\"></td>");
				level.appendTo(tr);
				var rank = $("<ul class=\"rank\"></ul>");
				rank.appendTo(level);
				
				for(var g=0; g < ski[h].rank; g++)
				{
					$("<li class=\"y\"></li>").appendTo(rank);
				}
				for(var g=0; g < 5 - ski[h].rank; g++)
				{
					$("<li class=\"\"></li>").appendTo(rank);
				}				
				tr.appendTo($("#skills"));
			}
		}

	}


	if(hasSkill && resume.theme == "wood")
	{
		var ski = resume.skill;
		for( var h = 0; h < ski.length; h++){
			if(ski[h].title != "")
			{
				var tr = $("<tr></tr>");
				$("<td class=\"title" + (ski[h].title.length > 10 ? " s" : "") + "\">" + ski[h].title + "</td>").appendTo(tr);
				var level = $("<td class=\"level\"></td>");
				level.appendTo(tr);
				var rank = $("<div id=\"rank_wood\"></div>");
				rank.appendTo(level);
				switch(ski[h].rank) {
					case '1':
						$("<div class=\"rank_wood_1\"></div>").appendTo(rank);
						break;
					case '2':
						$("<div class=\"rank_wood_2\"></div>").appendTo(rank);
						break;
					case '3':
						$("<div class=\"rank_wood_3\"></div>").appendTo(rank);
						break;
					case '4':
						$("<div class=\"rank_wood_4\"></div>").appendTo(rank);
						break;
					case '5':
						$("<div class=\"rank_wood_5\"></div>").appendTo(rank);
						break;
					default :
						break;

				}
				tr.appendTo($("#skills"));
			}
		}
	}

	if(hasSkill && resume.theme == 'geometry'){
		var ski = resume.skill;
		for( h = 0; h < ski.length; h++){
			if(ski[h].title != "")
			{
				var tr = $("<tr></tr>");
				$("<td class=\"title" + (ski[h].title.length > 10 ? " s" : "") + "\">" + ski[h].title + "</td>").appendTo(tr);
				var level = $("<td class=\"level\"></td>");
				level.appendTo(tr);
				var rank = $("<ul class=\"rank_geometry\"></ul>");
				rank.appendTo(level);
				//for(var i = 1; i <= ski[h].rank; i++){
				//
				//	$("<div class=\"rank_geometry_i\"></div>").appendTo(rank);
				//}
				switch(ski[h].rank) {
					case '1':
						$("<li class=\"rank_geometry_1\"></li>").appendTo(rank);
						break;
					case '2':
						$("<li class=\"rank_geometry_1\"></li>").appendTo(rank);
						$("<li class=\"rank_geometry_2\"></li>").appendTo(rank);
						break;
					case '3':
						$("<li class=\"rank_geometry_1\"></li>").appendTo(rank);
						$("<li class=\"rank_geometry_2\"></li>").appendTo(rank);
						$("<li class=\"rank_geometry_3\"></li>").appendTo(rank);
						break;
					case '4':
						$("<li class=\"rank_geometry_1\"></li>").appendTo(rank);
						$("<li class=\"rank_geometry_2\"></li>").appendTo(rank);
						$("<li class=\"rank_geometry_3\"></li>").appendTo(rank);
						$("<li class=\"rank_geometry_4\"></li>").appendTo(rank);
						break;
					case '5':
						$("<li class=\"rank_geometry_1\"></li>").appendTo(rank);
						$("<li class=\"rank_geometry_2\"></li>").appendTo(rank);
						$("<li class=\"rank_geometry_3\"></li>").appendTo(rank);
						$("<li class=\"rank_geometry_4\"></li>").appendTo(rank);
						$("<li class=\"rank_geometry_5\"></li>").appendTo(rank);
						break;
					default :
						break;

				}
			}
				tr.appendTo($("#skills"));
		}
	}



	if(!hasSkill && !hasCertification)
	{
		$("#skill").hide();
	}	
}

//获取荣誉
function getHonors()
{
	if($.isArray(resume.honor) && resume.honor.length > 0)
	{
		$("#honors").html("");
		var hor = resume.honor;
		for(var f=0; f < hor.length; f++)
		{
			if(hor[f].title != "")
			{
				var tr = $("<tr></tr>");
				$("<td class=\"title\" valign=\"top\">" + hor[f].date + "</td>").appendTo(tr);
				$("<td class=\"dd\" valign=\"top\">……</td>").appendTo(tr);
				$("<td class=\"content\">" + hor[f].title + "</td>").appendTo(tr);
				tr.appendTo($("#honors"));
			}
		}
	}
	else
	{
		$("#honor").hide();
	}	
}

//获取联系方式
function getContacts()
{
	$("#contacts").html("");
	
	//联系方式
	if(resume.contact.mobile != "")
	{
		var num = resume.contact.mobile;
		if(/\d{11}/.test(num))
		{
			num = num.slice(0,3) + "-" + num.slice(3,7) + "-" + num.slice(7,11);
		}
		var tel = $("<div class=\"tel\"></div>").appendTo($("#contacts"));
		$("<a " + (/\*/.test(num) || isAndroid() ? "" : "href=\"tel:" + num + "\"") + ">" + num + "</a>").appendTo(tel);
	}
	if(resume.contact.email != "")
	{
		var email = $("<div class=\"email\"></div>").appendTo($("#contacts"));
		$("<a " + (/\*/.test(resume.contact.email) || isAndroid() ? "" : "href=\"mailto:" + resume.contact.email + "\"") + ">" + resume.contact.email + "</a>").appendTo(email);
	}
	
	var moreContacts = $("<table></table>").appendTo($("#contacts"));
	if(resume.contact.qq != "")
	{
		$("<tr><td class=\"title\">QQ</td><td class=\"dd\">……</td><td class=\"content\">" + resume.contact.qq + "</td></tr>").appendTo(moreContacts);
	}
	if(resume.contact.wechat != "")
	{
		$("<tr><td class=\"title\">微信</td><td class=\"dd\">……</td><td class=\"content\">" + resume.contact.wechat + "</td></tr>").appendTo(moreContacts);
	}	
	if(resume.contact.weibo != "")
	{
		$("<tr><td class=\"title\">微博</td><td class=\"dd\">……</td><td class=\"content\">" + resume.contact.weibo + "</td></tr>").appendTo(moreContacts);
	}
}

//底部小莫标识
function addXiaomo()
{
	$("#xiaomo").remove();
	$("<div id=\"xiaomo\"><p>在 xiaomo.com 上查看我的更多信息与简历视频</p></div>").insertAfter($("#contact"));
}
function removeXiaomo(){
	$("#xiaomo").remove();
}

//上下App下载区域
function addBanner() {
	var downloadUrl = "http://www.xiaomo.com/jianli/download";
	$("body").prepend("<div id=\"app-banner\" class=\"clearfix\"><a href=\"" + downloadUrl+ "\"><div class=\"app-download\"></div></a><div class=\"app-logo\"></div></div>");
	$("body").append("<div id=\"app-banner-fixed\" class=\"clearfix\"><a href=\"" + downloadUrl + "\"><div class=\"app-download\"></div></a><div class=\"app-logo\"></div></div>");	
}
function removeBanner() {
	$("#app-banner").remove();
	$("#app-banner-fixed").remove();
}

//切换为隐私信息
function goPrivate() {
	var bday = resume.basic.birthday;
	if(checkDate(bday))
	{
		//$("#realName").text(getAstro(bday) + (resume.basic.sex ? resume.basic.sex + "生" : "的朋友"));
		$("#age").text(getGeneration(bday));
	}
	
	//联系方式
	$("#contacts").html("");
	if(resume.contact.mobile != "")
	{
		var num = resume.contact.mobile;
		if(/\d{11}/.test(num))
		{
			num = num.slice(0,2) + "**********";
		}
		var tel = $("<div class=\"tel\"></div>").appendTo($("#contacts"));
		$("<a>" + num + "</a>").appendTo(tel);
	}
	if(resume.contact.email != "")
	{
		var em = resume.contact.email;
		if(em.indexOf("@") > 0) {
			em = em.slice(0, Math.min(2, em.indexOf("@"))) + "*****" + em.slice(em.indexOf("@"));
		}
		
		var email = $("<div class=\"email\"></div>").appendTo($("#contacts"));
		$("<a>" + em + "</a>").appendTo(email);
	}
	
	var moreContacts = $("<table></table>").appendTo($("#contacts"));
	if(resume.contact.qq != "")
	{
		$("<tr><td class=\"title\">QQ</td><td class=\"dd\">……</td><td class=\"content\">保密</td></tr>").appendTo(moreContacts);
	}
	if(resume.contact.weibo != "")
	{
		$("<tr><td class=\"title\">微博昵称</td><td class=\"dd\">……</td><td class=\"content\">保密</td></tr>").appendTo(moreContacts);
	}
	if(resume.contact.wechat != "")
	{
		$("<tr><td class=\"title\">微信号</td><td class=\"dd\">……</td><td class=\"content\">保密</td></tr>").appendTo(moreContacts);
	}
}

//切换为公开信息
function goPublic()
{
	$("#realName").text(resume.basic.name ? resume.basic.name : "名字没写");
	var bday = resume.basic.birthday;
	$("#age").text(getAge(bday));

	getContacts();
}

//切换为分享模式
function goShare(private)
{
	//隐私是否公开
	if(private)
	{
		goPrivate();
	}
	else
	{
		goPublic();
	}
	
	//更改形象
	$("#videoAvatar").css("z-index","50").hide();
	$("#photoAvatar").css("z-index","100").show();	
	
	//更改自我介绍
	$(".video_intro").hide();
	$(".text_intro").show();
	
	//添加底部标识
	addXiaomo();
}

//还原为浏览模式
function goNormal()
{
	goPublic();

	//移除底部标识
	removeXiaomo();
	
	//更改形象
	getAvatar();
	
	//更改自我介绍
	getIntroduction();	
}


//更新模板
function changeTheme(name)
{
	$("#theme").attr("href","./theme/" + name + "/main.css");
}


$(document).ready(function(){
	
	//主题
	var theme = "default";
	if(resume.theme && resume.theme != "")
	{
		theme = resume.theme;
		changeTheme(theme);
	}

	if(isAndroid())
	{
		mowei.initialize(resume.videoAvatarUrl, theme);
	}
	
	if(resume != null)
	{

		//基本资料
		getBasicInfo();
		
		//形象
		getAvatar();

		//标签
		getTags();
		
		//自我介绍
		getIntroduction();
		
		//期望工作
		getTarget();
		
		//教育经历
		getEducations();
	
		//技能
		getSkills();
	
		//荣誉
		getHonors();
					
		//校园/实习经历
		getExperiences();			
	
		//联系方式
		getContacts();
	}	
});

$(window).load(function (e){
    $('#loading').hide(100).remove();
    $('#container').removeClass('hide');
    $('#rate').removeClass('hide');
});