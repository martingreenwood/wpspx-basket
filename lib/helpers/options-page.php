<?php
if (!defined( 'ABSPATH' ) ) die( 'Forbidden' );

add_action( 'admin_init', 'wpspx_basket_settings_init' );

function wpspx_basket_settings_init(  ) {

	// BASKET Settings

	register_setting( 'wpspxBasketPage', 'wpspx_basket_settings' );

	add_settings_section(
		'wpspx_wpspxBasketPage_section',
		__( 'Settings for your Basket', 'wpspx' ),
		'wpspx_basket_section_callback',
		'wpspxBasketPage'
	);

	add_settings_field(
		'wpspx_basket_colour',
		__( 'Basket background colour', 'wpspx' ),
		'wpspx_basket_colour_render',
		'wpspxBasketPage',
		'wpspx_wpspxBasketPage_section'
	);
	add_settings_field(
		'wpspx_basket_icon_colour',
		__( 'Basket Icon colour', 'wpspx' ),
		'wpspx_basket_icon_colour_render',
		'wpspxBasketPage',
		'wpspx_wpspxBasketPage_section'
	);

}

// Basket background colour
function wpspx_basket_colour_render(  ) {

	$options = get_option( 'wpspx_basket_settings' );
	?>
	<input type='text' class="wpspx-color-field" name='wpspx_basket_settings[wpspx_basket_colour]' value='<?php if(isset($options['wpspx_basket_colour'])): echo $options['wpspx_basket_colour']; endif; ?>'>
	<?php

}

// Basket background colour
function wpspx_basket_icon_colour_render(  ) {

	$options = get_option( 'wpspx_basket_settings' );
	?>
	<input type='text' class="wpspx-color-field" name='wpspx_basket_settings[wpspx_basket_icon_colour]' value='<?php if(isset($options['wpspx_basket_icon_colour'])): echo $options['wpspx_basket_icon_colour']; endif; ?>'>
	<?php

}


function wpspx_basket_section_callback(  ) {

	echo __( '<p>Please select the colours you would like for your basket.</p>', 'wpspx' );

}

function wpspx_basket_options_page(  ) {
		?>
		<form action='options.php' method='post' autocomplete="off">

			<div class="wpspx-wrapper">

				<header>
					<div class="logo">
						<img src="<?php echo WPSPX_PLUGIN_URL; ?>/lib/assets/logo.svg" alt="" width="160px">
					</div>
					<nav>
						<ul>
							<li><a href="<?php echo admin_url() . 'admin.php?page=wpspx' ?>">API Settings</a></li>
							<li><a href="<?php echo admin_url() . 'admin.php?page=wpspx-shows' ?>">Data Sync</a></li>
							<li><a href="<?php echo admin_url() . 'admin.php?page=wpspx-cache' ?>">Cache</a></li>
							<li><a class="active" href="<?php echo admin_url() . 'admin.php?page=wpspx-basket' ?>">Basket</a></li>
							<?php if (is_plugin_active('wpspx-login/wp-spektrix-login.php')): ?>
							<li><a href="<?php echo admin_url() . 'admin.php?page=wpspx-login' ?>">Login</a></li>
							<?php endif; ?>
							<li><a href="<?php echo admin_url() . 'admin.php?page=wpspx-support' ?>">Support</a></li>
						</ul>
					</nav>
				</header>

				<article>

					<?php if (isset($_GET['settings-updated'])): ?>
					<div class="notice notice-success is-dismissible">
						<p><strong>Basket Settings Saved.</strong></p>
						<button type="button" class="notice-dismiss">
							<span class="screen-reader-text">Dismiss this notice.</span>
						</button>
					</div>
					<?php endif; ?>

					<div class="tab">

						<div class="content">
							<section>
								<?php
								settings_fields( 'wpspxBasketPage' );
								do_settings_sections( 'wpspxBasketPage' );
								?>
								<br /><br /><?php
								submit_button('Save Settings');
								?>
							</section>
						</div>
					</div>

				</article>

			</div>

		</form>
		<?php

}
