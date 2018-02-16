<?php
if(isset($_REQUEST['action'])  && !empty($_REQUEST['action'])) {
	$action = $_REQUEST['action'];
	$AJAX = new OurAjax();
	if(method_exists($AJAX,$action)) $AJAX->$action();
	else exit();
}


class OurAjax {
	const to_emails = 'kurskecostroi@yandex.ru,kurskecostroi@mail.ru';
	const admin_from_email = 'cn3bie@';
	static public function send($subject,$body){
		$header  = "FROM: ".self::admin_from_email.$_SERVER['HTTP_HOST']."\n";
		$header .= "Content-Type: text/html; charset=utf-8\n";
		$header .= "X-From: ".self::admin_from_email.$_SERVER['HTTP_HOST']."\n";
		$header .= "Return-Path: ".self::admin_from_email.$_SERVER['HTTP_HOST']."\n";
		$_body = '
				<!DOCTYPE html>
				<html lang="ru">
					<head>
						<title>Home</title>
						<meta name = "format-detection" content = "telephone=no" />
						<meta charset="utf-8">
						<link rel="icon" href="'.$_SERVER['HTTP_HOST'].'/images/favicon.ico" type="image/x-icon">
						<link rel="shortcut icon" href="'.$_SERVER['HTTP_HOST'].'/images/favicon.ico" type="image/x-icon" />
						<link rel="stylesheet" type="text/css" media="all" href="'.$_SERVER['HTTP_HOST'].'/css/style.css">
					</head>
					<body id="body_main">
						<div class="container" style="width:800px;margin:0 auto;min-height:400px;padding-top:50px">
							<h2 class="title1 reg pb30">На <a href="'.$_SERVER['HTTP_HOST'].'">странице '. $_SERVER['HTTP_HOST'].'</a><BR>заполнена форма "узнать больше"</h2> '
							.$body
						.'</div>
					</body>
				</html>
			';
		echo mail(self::to_emails,$subject,$body,$header);
	}
	function knowMore() {
		if(isset($_REQUEST['phone']) && isset($_REQUEST['fio'])) {
			$body = '<ul class="left_to_right_list">
								<li class="left_to_right_list_item"> ФИО : '.$_REQUEST['fio'].'. </li>
								<li class="left_to_right_list_item"> Телефон : '.$_REQUEST['phone'].'. </li>
							</ul>';

			self::send('Окна, Запрос номер:'.time(),$body);
		}
	}

	function zamer() {
		if(isset($_REQUEST['phone']) && isset($_REQUEST['fio'])) {
			$body = '<ul class="left_to_right_list">
								<li class="left_to_right_list_item"> ФИО : '.$_REQUEST['fio'].'. </li>
								<li class="left_to_right_list_item"> Телефон : '.$_REQUEST['phone'].'. </li>
							</ul>';
			self::send('Окна - Запрос замер номер:'.time(),$body);
		}
	}
	function resp() {
		if(isset($_REQUEST['text']) && isset($_REQUEST['fio'])) {
			$body = '<ul class="left_to_right_list">
								<li class="left_to_right_list_item"> ФИО : '.$_REQUEST['fio'].'. </li>
								<li class="left_to_right_list_item"> Отзыв : '.$_REQUEST['text'].'. </li>
							</ul>';
			self::send('Окна - Отзыв',$body);
		}
	}

	function callMe() {
		if(isset($_REQUEST['phone']) && isset($_REQUEST['fio'])) {
			$body = '<ul class="left_to_right_list">
								<li class="left_to_right_list_item"> ФИО : '.$_REQUEST['fio'].'. </li>
								<li class="left_to_right_list_item"> Телефон : '.$_REQUEST['phone'].'. </li>
							</ul> ';
			self::send('Окна - Перезвонить, зявка номер:'.time(),$body);
		}
	}
}