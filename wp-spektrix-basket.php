<?php
/*
 * Plugin Name: WPSPX Basket
 * Tags: spektrix, tickets, api, booking, theatre
 * Plugin URI: https://wearebeard.com/wpwpx
 * Description: A WPSPX addon - basket
 * Version: 1.0.0
 * Author: Martin Greenwood
 * Author URI: https://martingreenwood.com
 * Text Domain: wpspx-basket
 * Domain Path: /languages
 * License: GPL v2 or later

 Copyright © 2016 Martin Greenwood

 This program is free software; you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation; either version 2 of the License, or
 (at your option) any later version.

 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.

 */

if (!defined( 'ABSPATH' ) ) die( 'Forbidden' );

define( 'WPSPX_BASKET_PLUGIN_URL', plugin_dir_url( __FILE__ ) );
define( 'WPSPX_BASKET_PLUGIN_DIR', plugin_dir_path( __FILE__ ) );

class WPSPX_Basket {

	private static $instance = null;
	private $wpspx;

	public static function get_instance()
	{
		if ( is_null( self::$instance ) )
		{
			self::$instance = new self;
		}
		return self::$instance;
	}

	private function __construct()
	{
		add_action( 'wp_enqueue_scripts', 'wpspx_basket_frontend_scripts', 99 );
		add_action( 'admin_enqueue_scripts', 'wpspx_basket_enqueue_color_picker' );

	}
}


add_filter( 'plugin_action_links_' . plugin_basename(__FILE__), 'wpspx_basket_settings_link' );
function wpspx_basket_settings_link( $links )
{
	$url = admin_url() . 'admin.php?page=wpspx-basket';
	$_link = '<a href="'.$url.'">' . __( 'Settings', 'wpspx' ) . '</a>';
	$links[] = $_link;
	return $links;
}


include WPSPX_BASKET_PLUGIN_DIR  . '/settings.php';

WPSPX_Basket::get_instance();
