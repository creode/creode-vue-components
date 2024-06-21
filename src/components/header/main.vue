<template>
	<header class="header__wrapper">
		<div class="header__inner">
			<div class="header__sections">
				<div class="header__section header__section--logo" v-if="$slots.logo">
					<div class="header__logo-wrapper">
						<slot name="logo"></slot>
					</div>
				</div>
        <slot name="before-menu"></slot>
				<div class="header__section header__section--menu" :class="{ 'header__section--desktop-menu': isDesktopScreen() }" v-if="$slots.menu">
					<div class="header__menu-toggle-wrapper" :hidden="isDesktopScreen()">
						<input id="header-menu-toggle" type="checkbox" class="header__menu-toggle" v-model="menuExpanded" v-on:keyup.enter="menuToggleOnEnter" hidden>
						<label for="header-menu-toggle" class="header__menu-toggle-label" aria-haspopup="menu" :aria-expanded="menuExpanded" aria-controls="header-menu">
							{{ menuExpanded ? 'Close menu' : 'Open menu' }}
						</label>
					</div>
					<div id="header-menu" class="header__menu-wrapper" :hidden="!menuExpanded">
						<nav class="header__menu-inner" ref="menuInner">
							<div class="header__menu-close-button-wrapper" :hidden="isDesktopScreen()">
								<button type="button" class="header__menu-close-button" v-on:click="menuExpanded = false">
									Close menu
								</button>
							</div>
							<slot name="menu"></slot>
						</nav>
					</div>
				</div>
        <slot name="after-menu"></slot>
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
			this.setFocusableMenuItems();
		},
		methods: {
			// General methods.
			resetMenuExpandedState() {
				this.menuExpanded = this.isDesktopScreen();
			},
			isDesktopScreen() {
				return this.breakpoint < window.innerWidth;
			},
			setFocusableMenuItems() {
				let focusables = this.$refs.menuInner.querySelectorAll('a, button');

				for (let i = 0; i < focusables.length; i++) {
					focusables[i].tabIndex = this.menuExpanded ? 0 : -1;
				}
			},
			// Event handlers.
			menuToggleOnEnter(event) {
				event.preventDefault();
				this.menuExpanded = ! this.menuExpanded;
			}
		},
		watch: {
			menuExpanded() {
				this.setFocusableMenuItems();
			}
		}
	};
</script>
