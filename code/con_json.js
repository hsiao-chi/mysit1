var animates = '									 \
{                                                    \
			"anim":[                                 \
				{"type":"社會",                      \
					"animate":[                      \
						"黑執事I、II、III",          \
						"東京殘響",                  \
						"joker game",                \
						"Relife",                    \
						"91Days",                    \
						"ACCA",                      \
						"全職高手"                   \
					]                                \
				},                                   \
				{"type":"超現實",                    \
					"animate":[                      \
						"家庭教師",                  \
						"東京食屍鬼",                \
						"青年黑傑克",                \
						"黑之契約者1，2，OVA",       \
						"BTOOOM",                    \
						"刀劍神域I、II",             \
						"暗殺教室",                  \
						"無頭騎士I、II承轉結",       \
						"數碼寶貝Tri."               \
				                                     \
					]                                \
				},                                   \
				{"type":"奇幻",                      \
					"animate":[                      \
						"鋼之練金術士2009",          \
						"火影忍者",                  \
						"Bleach死神",                \
						"反叛的魯路修I、II",         \
						"Brave10",                   \
						"八犬傳-東方八犬異聞",       \
						"進擊的巨人I、II",           \
						"黑色嘉年華",                \
						"終結的熾天使",              \
						"笑傲曇天",                  \
						"K",                         \
						"罪惡王冠",                  \
						"境界的彼方",                \
						"來自新世界",                \
						"灰與幻想的格林姆嘉爾",      \
						"噬魂者",                    \
						"甲鐵城的卡巴內里",          \
						"magi 辛巴達冒險譚",         \
						"魔奇少年I、II",             \
						"驅魔少年I、II",             \
						"文豪野犬I、II",             \
						"彩雲國物語",                \
						"吸血鬼僕人",                \
						"刀劍亂舞"                   \
						                             \
						                             \
				                                     \
					]                                \
				},                                   \
				{"type":"神怪",                      \
					"animate":[                      \
						"少年陰陽師",                \
						"妖怪少爺I、II",             \
						"流浪神差",                  \
						"憂鬱的怪物庵",              \
						"夏目友人帳",                \
						"青之驅魔師-本篇、不淨王篇"  \
					]                                \
				},                                   \
				{"type":"運動",                      \
					"animate":[                      \
						"網球王子",                  \
						"黑子的籃球",                \
						"飆速宅男",                  \
						"疾走王子",                  \
						"排球少年I、II、III",        \
						"鑽石王牌I、II",             \
						"FREE",                      \
						"男子啦啦隊",                \
						"yuri on ice"                \
				                                     \
					]                                \
				},                                   \
				{"type":"偶像番",                    \
					"animate":[                      \
						"B-project",                 \
						"月歌",                      \
						"Marginal#4"                 \
				                                     \
					]                                \
				},                                   \
				{"type":"乙女",                      \
					"animate":[                      \
						"金色琴弦",                  \
						"歌之王子殿下",              \
						"與魔共舞",                  \
						"薄櫻鬼",                    \
						"諸神的黃昏"                 \
				                                     \
					]                                \
				}                                    \
			]                                        \
}                                                    \
';

var obj = JSON.parse(animates,function(key,value){
	return value;
});

document.getElementById("list").innerHTML = obj.anim[0].type;
alert( obj.anim );
