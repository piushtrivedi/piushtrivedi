/* Kaskus Smileys For Blogger Comments
 * bY Joe
 * Url: http://4blogspottutorial.blogspot.com/
 */
a = document.getElementById('comment-holder');
if (a) {
	b = a.getElementsByTagName("p");
	for (i = 0; i < b.length; i++) {
		if (b.item(i).getAttribute('CLASS') == 'comment-content') {
			bh_b_smly = b.item(i).innerHTML.replace(/:\)/gi, "<a href='http://4blogspottutorial.blogspot.com/2012/04/pasang-emoticon-kaskus-pada-komentar.html' target='_blank' rel='dofollow'><img src='http://static.kaskus.us/images/smilies/sumbangan/15.gif' alt='' class='kaskus'/></a>");
			bh_b_smly = bh_b_smly.replace(/:thumbup/gi, "<img src='https://googledrive.com/host/0B7H_GQEvKCj1SmIxOXhHalV2ZVE/jempol1.gif'' alt='' class='kaskus'/>");
			bh_b_smly = bh_b_smly.replace(/:2thumbup/gi, "<a href='http://4blogspottutorial.blogspot.com/2012/04/pasang-emoticon-kaskus-pada-komentar.html' target='_blank' rel='dofollow'><img src='https://googledrive.com/host/0B7H_GQEvKCj1SmIxOXhHalV2ZVE/jempol2.gif' alt='' class='kaskus'/></a>");
			bh_b_smly = bh_b_smly.replace(/:iloveindonesia/gi, "<img src='https://googledrive.com/host/0B7H_GQEvKCj1SmIxOXhHalV2ZVE/I-Luv-Indonesia.gif' alt='' class='kaskus'/>");
			bh_b_smly = bh_b_smly.replace(/:ilovekaskus/gi, "<img src='https://googledrive.com/host/0B7H_GQEvKCj1SmIxOXhHalV2ZVE/s_sm_ilovekaskus.gif' alt='' class='kaskus'/>");
			bh_b_smly = bh_b_smly.replace(/:kiss/gi, "<img src='https://googledrive.com/host/0B7H_GQEvKCj1SmIxOXhHalV2ZVE/cewek.gif' alt='' class='kaskus'/>");
			bh_b_smly = bh_b_smly.replace(/:genit/gi, "<img src='https://googledrive.com/host/0B7H_GQEvKCj1SmIxOXhHalV2ZVE/s_sm_maho.gif' alt='' class='kaskus'/>");
			bh_b_smly = bh_b_smly.replace(/:marah/gi, "<img src='https://googledrive.com/host/0B7H_GQEvKCj1SmIxOXhHalV2ZVE/marah.gif' alt='' class='kaskus'/>");
			bh_b_smly = bh_b_smly.replace(/:berduka/gi, "<img src='https://googledrive.com/host/0B7H_GQEvKCj1SmIxOXhHalV2ZVE/berduka.gif' alt='' class='kaskus'/>");
			bh_b_smly = bh_b_smly.replace(/:D/gi, "<a href='http://4blogspottutorial.blogspot.com/2012/04/pasang-emoticon-kaskus-pada-komentar.html' target='_blank' rel='dofollow'><img src='http://static.kaskus.us/images/smilies/sumbangan/14.gif' alt='' class='kaskus'/></a>");
			bh_b_smly = bh_b_smly.replace(/:najis/gi, "<img src='https://googledrive.com/host/0B7H_GQEvKCj1SmIxOXhHalV2ZVE/najis.gif' alt='' class='kaskus'/>");
			bh_b_smly = bh_b_smly.replace(/:malu/gi, "<img src='https://googledrive.com/host/0B7H_GQEvKCj1SmIxOXhHalV2ZVE/malu.gif' alt='' class='kaskus'/>");
			bh_b_smly = bh_b_smly.replace(/:ngakak/gi, "<img src='https://googledrive.com/host/0B7H_GQEvKCj1SmIxOXhHalV2ZVE/ngakak.gif' alt='' class='kaskus'/>");
			bh_b_smly = bh_b_smly.replace(/:repost/gi, "<img src='https://googledrive.com/host/0B7H_GQEvKCj1SmIxOXhHalV2ZVE/s_sm_repost1.gif' alt='' class='kaskus'/>");
			bh_b_smly = bh_b_smly.replace(/:sup2:/gi, "<img src='https://googledrive.com/host/0B7H_GQEvKCj1SmIxOXhHalV2ZVE/sundul.gif' alt='' class='kaskus'/>");
			bh_b_smly = bh_b_smly.replace(/:batabig/gi, "<img src='https://googledrive.com/host/0B7H_GQEvKCj1SmIxOXhHalV2ZVE/s_big_batamerah.gif' alt='' class='kaskus'/>");
			bh_b_smly = bh_b_smly.replace(/:takut/gi, "<img src='https://googledrive.com/host/0B7H_GQEvKCj1SmIxOXhHalV2ZVE/takut.gif' alt='' class='kaskus'/>");
			bh_b_smly = bh_b_smly.replace(/:ngacir/gi, "<img src='https://googledrive.com/host/0B7H_GQEvKCj1SmIxOXhHalV2ZVE/ngacir2.gif' alt='' class='kaskus'/>");
			bh_b_smly = bh_b_smly.replace(/:shakehand/gi, "<img src='https://googledrive.com/host/0B7H_GQEvKCj1SmIxOXhHalV2ZVE/shakehand2.gif' alt='' class='kaskus'/>");
			bh_b_smly = bh_b_smly.replace(/:bingung/gi, "<img src='https://googledrive.com/host/0B7H_GQEvKCj1SmIxOXhHalV2ZVE/bingung.gif' alt='' class='kaskus'/>");
			bh_b_smly = bh_b_smly.replace(/:cekpm/gi, "<img src='https://googledrive.com/host/0B7H_GQEvKCj1SmIxOXhHalV2ZVE/cekpm.gif' alt='' class='kaskus'/>");
			bh_b_smly = bh_b_smly.replace(/:capedeh/gi, "<img src='https://googledrive.com/host/0B7H_GQEvKCj1SmIxOXhHalV2ZVE/capede.gif' alt='' class='kaskus'/>");
			bh_b_smly = bh_b_smly.replace(/:hammer/gi, "<img src='https://googledrive.com/host/0B7H_GQEvKCj1SmIxOXhHalV2ZVE/hammer.gif' alt='' class='kaskus'/>");
			bh_b_smly = bh_b_smly.replace(/:peluk/gi, "<img src='https://googledrive.com/host/0B7H_GQEvKCj1SmIxOXhHalV2ZVE/peluk.gif' alt='' class='kaskus'/>");
			bh_b_smly = bh_b_smly.replace(/:cendol/gi, "<img src='https://googledrive.com/host/0B7H_GQEvKCj1SmIxOXhHalV2ZVE/toastcendol.gif' alt='' class='kaskus'/>");
			bh_b_smly = bh_b_smly.replace(/:hoax/gi, "<img src='https://googledrive.com/host/0B7H_GQEvKCj1SmIxOXhHalV2ZVE/hoax.gif' alt='' class='kaskus'/>");
			bh_b_smly = bh_b_smly.replace(/:selamat/gi, "<img src='https://googledrive.com/host/0B7H_GQEvKCj1SmIxOXhHalV2ZVE/selamat.gif' alt='' class='kaskus'/>");
			bh_b_smly = bh_b_smly.replace(/:matabelo/gi, "<img src='https://googledrive.com/host/0B7H_GQEvKCj1SmIxOXhHalV2ZVE/matabelo1.gif' alt='' class='kaskus'/>");
			bh_b_smly = bh_b_smly.replace(/:mewek/gi, "<img src='https://googledrive.com/host/0B7H_GQEvKCj1SmIxOXhHalV2ZVE/mewek.gif' alt='' class='kaskus'/>");
			bh_b_smly = bh_b_smly.replace(/:request/gi, "<img src='https://googledrive.com/host/0B7H_GQEvKCj1SmIxOXhHalV2ZVE/request.gif' alt='' class='kaskus'/>");
			bh_b_smly = bh_b_smly.replace(/:sorry/gi, "<img src='https://googledrive.com/host/0B7H_GQEvKCj1SmIxOXhHalV2ZVE/sorry.gif' alt='' class='kaskus'/>");
			bh_b_smly = bh_b_smly.replace(/:salahkamar/gi, "<img src='https://googledrive.com/host/0B7H_GQEvKCj1SmIxOXhHalV2ZVE/baeud.gif' alt='' class='kaskus'/>");
			bh_b_smly = bh_b_smly.replace(/:rate5/gi, "<img src='http://static.kaskus.us/images/smilies/rate5.gif' alt='' class='kaskus'/>");
			bh_b_smly = bh_b_smly.replace(/:cool/gi, "<img src='https://googledrive.com/host/0B7H_GQEvKCj1SmIxOXhHalV2ZVE/cool2.gif' alt='' class='kaskus'/>");
			bh_b_smly = bh_b_smly.replace(/:sup:/gi, "<img src='https://googledrive.com/host/0B7H_GQEvKCj1SmIxOXhHalV2ZVE/fd_5.gif' alt='' class='kaskus'/>");
			bh_b_smly = bh_b_smly.replace(/:kbgt/gi, "<img src='https://googledrive.com/host/0B7H_GQEvKCj1SmIxOXhHalV2ZVE/fd_4.gif' alt='' class='kaskus'/>");
			bh_b_smly = bh_b_smly.replace(/:nohope/gi, "<img src='https://googledrive.com/host/0B7H_GQEvKCj1SmIxOXhHalV2ZVE/nohope.gif' alt='' class='kaskus'/>");
			bh_b_smly = bh_b_smly.replace(/:ar\!/ig, "<img src='http://l.yimg.com/a/i/us/msg/emoticons/pirate_2.gif' alt='' class='kaskus'/>")
			b.item(i).innerHTML = bh_b_smly;
		}
	}
}
