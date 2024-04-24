<template>
	<header class="header__wrapper">
		<div class="header__inner">
			<div class="header__sections">
				<div class="header__section header__section--logo" v-if="$slots.logo">
					<div class="header__logo-wrapper">
						<slot name="logo"></slot>
					</div>
				</div>
				<div class="header__section header__section--menu" :class="{ 'header__section--desktop-menu': isDesktopScreen() }" v-if="$slots.menu">
					<div class="header__menu-toggle-wrapper" :hidden="isDesktopScreen()">
						<input id="header-menu-toggle" type="checkbox" class="header__menu-toggle" v-model="menuExpanded" hidden>
						<label for="header-menu-toggle" class="header__menu-toggle-label" role="button" aria-haspopup="menu" :aria-expanded="menuExpanded" aria-controls="header-menu">
							{{ menuExpanded ? 'Close menu' : 'Open menu' }}
						</label>
					</div>
					<div id="header-menu" class="header__menu-wrapper" :hidden="!menuExpanded">
						<nav class="header__menu-inner">
							<div class="header__menu-close-button-wrapper" :hidden="isDesktopScreen()">
								<button type="button" class="header__menu-close-button" v-on:click="menuExpanded = false">
									Close menu
								</button>
							</div>
							<slot name="menu"></slot>
						</nav>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
	export default {
		name: 'main',
		props: {
			breakpoint: {
				type: Number,
				default: 760
			}
		},
		data: function() {
			return {
				'menuExpanded': this.isDesktopScreen()
			}
		},
		mounted: function() {
			window.addEventListener(
				'resize',
				() => {
					this.resetMenuExpandedState();
				}
			);
		},
		methods: {
			resetMenuExpandedState() {
				this.menuExpanded = this.isDesktopScreen();
			},
			isDesktopScreen() {
				return this.breakpoint < window.innerWidth;
			}
		}
	};
</script>
