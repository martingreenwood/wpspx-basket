<?php
if (!defined( 'ABSPATH' ) ) die( 'Forbidden' );

/*==============================
=            BASKET            =
==============================*/

function wpspx_basket() {
	$options = get_option( 'wpspx_basket_settings' );
	if (!is_page('basket')) {
	?><div class="wpspxbasket is-fixed">
		<spektrix-basket-summary class="is-primary" custom-domain="<?php echo WPSPX_SPEKTRIX_CUSTOM_URL ?>" client-name="<?php echo WPSPX_SPEKTRIX_USER ?>">
			<div class="basket-icon" <?php if ($options['wpspx_basket_colour']): ?>style="background-color:<?php echo $options['wpspx_basket_colour']; ?>"<?php endif; ?>>
				<span class="count" data-basket-item-count></span>
				<span class="link">
					<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shopping-cart" <?php if ($options['wpspx_basket_icon_colour']): ?>style="color: <?php echo $options['wpspx_basket_icon_colour']; endif; ?>"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
				</span>
			</div>
		</spektrix-basket-summary>
	</div>
	<div class="wpspxbasket-side-panel">
		<div class="wpspx-basket-wrap">
			<a href="#" class="wpspx-basket-close"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></a>
			<h4 class="wpspx-basket-title">Basket</h4>
			<div class="wpspx-basket-contents">
				<div class="cache_url" data-cache-url="<?php echo WP_CONTENT_URL ?>/wpspx-cache/"></div>
				<div id="wpspx-basket-data">
					<div class="wpspx-total-items"></div>
					<div class="wpspx-basket-items"></div>
				</div>
			</div>
			<div id="wpspx-basket-total">
			</div>
			<a class="wpspx-basket-button" href="<?php echo home_url( '/basket' ) ?>">View Full Basket</a>
		</div>
	</div><?php
	}
}
add_action( 'wp_footer', 'wpspx_basket', 99 );
