<?php
if (!defined( 'ABSPATH' ) ) die( 'Forbidden' );


/*==============================
=            BASKET            =
==============================*/

function wpspx_basket() {
	$options = get_option( 'wpspx_basket_settings' );
	if (!is_page('basket')) {
	?>
	<div class="wpspxbasket is-fixed">
		<spektrix-basket-summary
			class="is-primary"
			custom-domain="<?php echo SPEKTRIX_CUSTOM_URL ?>"
			client-name="<?php echo SPEKTRIX_USER ?>">
			<div class="basket-icon" <?php if ($options['wpspx_basket_colour']): ?>style="background-color:<?php echo $options['wpspx_basket_colour']; ?>"<?php endif; ?>>
				<span class="count" data-basket-item-count></span>
				<span class="link">
					<svg aria-hidden="true" focusable="false" data-prefix="far" data-icon="shopping-basket" <?php if ($options['wpspx_basket_icon_colour']): ?>style="color:<?php echo $options['wpspx_basket_icon_colour']; ?>"<?php endif; ?> class="svg-inline--fa fa-shopping-basket fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M564 192h-72.902L362.286 40.457c-8.583-10.099-23.729-11.327-33.83-2.743-10.099 8.584-11.327 23.731-2.742 33.83L428.102 192H147.899L250.287 71.543c8.584-10.099 7.356-25.246-2.743-33.83s-25.246-7.355-33.83 2.743L84.901 192H12c-6.627 0-12 5.373-12 12v24c0 6.627 5.373 12 12 12h18.667l27.584 198.603C61.546 462.334 81.836 480 105.794 480h364.412c23.958 0 44.248-17.666 47.544-41.397L545.333 240H564c6.627 0 12-5.373 12-12v-24c0-6.627-5.373-12-12-12zm-93.794 240H105.794L79.127 240h417.745l-26.666 192zM312 296v80c0 13.255-10.745 24-24 24s-24-10.745-24-24v-80c0-13.255 10.745-24 24-24s24 10.745 24 24zm112 0v80c0 13.255-10.745 24-24 24s-24-10.745-24-24v-80c0-13.255 10.745-24 24-24s24 10.745 24 24zm-224 0v80c0 13.255-10.745 24-24 24s-24-10.745-24-24v-80c0-13.255 10.745-24 24-24s24 10.745 24 24z"></path></svg>
				</span>
			</div>

		</spektrix-basket-summary>
	</div>

	<div class="wpspxbasket-side-panel">
		<div class="wpspx-basket-wrap">
			<a href="#" class="wpspx-basket-close"><i class="far fa-times"></i></a>
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

			<a class="wpspx-basket-button" href="<?php echo home_url( '/checkout' ) ?>">Proceed to checkout</a>
		</div>
	</div>
	<?php
	}
}
add_action( 'wp_footer', 'wpspx_basket', 99 );
