//~~

interface IViewport {
	amount?: "some" | "all" | number | undefined;
	isOnce?: boolean | undefined,
}

export const motionOption = {
	hidden: "hidden",
	visible: "visible",
	exit: "exit",
	viewport: ({ amount, isOnce }: IViewport) => ({
		amount: amount || 0.5,
		once: isOnce || false,
	})
}

export const variantMediaDetailsPanelTitle = {
	hidden: {
		opacity: 0,
		translateY: "-50px",
	},
	visible: (custom: number) => ({
		opacity: 1,
		translateY: "0",
		transition: {
			delay: custom * 0.45,
			ease: "easeInOut",
			deration: 0.5,
		}
	}),
	exit: {
		opacity: 0,
		translateY: "-50px",
	}
}

export const variantMediaDetailsPanelOriginTitle = {
	hidden: {
		opacity: 0,
		translateY: "-50px",
	},
	visible: (custom: number) => ({
		opacity: 1,
		translateY: "0",
		transition: {
			delay: custom * 0.45,
			ease: "easeInOut",
			deration: 0.5,
		}
	}),
	exit: {
		opacity: 0,
		translateY: "-50px",
	}
}

export const variantMediaDetailsPost = {
	hidden: {
		opacity: 0,
		translateX: "-100px",
	},
	visible: (custom: number) => ({
		opacity: 1,
		translateX: "0px",
		transition: {
			delay: custom * 0.3,
			ease: "easeInOut",
			duration: 0.5,
		}
	}),
	exit: {
		opacity: 0,
		translateX: "-100px",
	},
}

export const variantMediaDetailsInfoRowList = {
	hidden: {
		opacity: 0,
		transformX: "-100px",
	},
	visible: (custom: number) => ({
		opacity: 1,
		transformX: "0px",
		transition: {
			delay: custom * 0.3,
			ease: "easeInOut",
			duration: 0.5,
		}
	}),
	exit: {
		opacity: 0,
		transformX: "-100px",
	}
}

export const variantMediaDetailsInfoRowText = {
	hidden: {
		opacity: 0,
		transformX: "-100px",
	},
	visible: (custom: number) => ({
		opacity: 1,
		transformX: "0px",
		transition: {
			delay: custom * 0.3,
			ease: "easeInOut",
			duration: 0.5,
		}
	}),
	exit: {
		opacity: 0,
		transformX: "-100px",
	}
}

export const variantsMediaDetailsInfoRowTitle = {
	hidden: {
		opacity: 0,
	},
	visible: (custom: number) => ({
		opacity: 1,
		transition: {
			delay: custom * 0.3,
			ease: "easeInOut",
			deration: 0.5,
		}
	}),
	exit: {
		opacity: 0,
	}
}

export const variantsMediaDetailsRating = {
	hidden: {
		opacity: 0,
	},
	visible: (custom: number) => ({
		opacity: 1,
		transition: {
			delay: custom * 0.3,
			ease: "easeInOut",
			duration: 0.5,
		}
	}),
	exit: {
		opacity: 0,
	}
}

export const variantsMediaDetailsRatingNumber = {
	hidden: {
		opacity: 0,
	},
	visible: (custom: number) => ({
		opacity: 1,
		transition: {
			delay: custom * 0.3,
			ease: "easeInOut",
			duration: 0.5,
		}
	}),
	exit: {
		opacity: 0,
	},
}

export const variantsMediaVideoTitle = {
	hidden: {
		scale: 0
	},
	visible: (custom: number) => ({
		scale: 1,
		transition: {
			delay: custom * 0.3,
			ease: "easeInOut",
			duration: 0.5,
		}
	}),
	exit: {
		scale: 0
	}
}

export const variantsTabBar = {
	hidden: {
		opacity: 0,
		translateX: "-100px",
		translateY: "100px",
	},
	visible: (custom: number) => ({
		opacity: 1,
		translateX: "0px",
		translateY: "0px",
		transition: {
			delay: custom * 0.3,
			ease: "easeInOut",
			duration: 0.5,
		}
	}),
	exit: {
		opacity: 0,
		translateX: "-100px",
		translateY: "100px",
	}
}

export const variantsMediaDetailsTop = {
	hidden: {
		opacity: 0,
		translateX: "100px",
		translateY: "100px",
	},
	visible: (custom: number) => ({
		opacity: 1,
		translateX: "0px",
		translateY: "0px",
		transition: {
			delay: custom * 0.3,
			ease: "easeInOut",
			duration: 0.5,
		}
	}),
	exit: {
		opacity: 0,
		translateX: "100px",
		translateY: "100px",
	},
}

export const variantsSectionActors = {
	hidden: {
		opacity: 0,
		translateY: "100px",
	},
	visible: (custom: number) => ({
		opacity: 1,
		translateY: "0px",
		transition: {
			delay: custom * 0.3,
			ease: "easeInOut",
			duration: 0.5,
		}
	}),
	exit: {
		opacity: 0,
		translateY: "100px",
	},
}

export const variantsMediaDetailsGallery = {
	hidden: {
		opacity: 0,
		translateX: "100px",
	},
	visible: (custom: number) => ({
		opacity: 1,
		translateX: "0px",
		transition: {
			delay: custom * 0.3,
			ease: "easeInOut",
			duration: 0.5,
		}
	}),
	exit: {
		opacity: 0,
		translateX: "100px",
	}
}

export const variantsMediaDetailsRecommendation = {
	hidden: {
		opacity: 0,
		translateY: "-200px",
	},
	visible: (custom: number) => ({
		opacity: 1,
		translateY: "0px",
		transition: {
			delay: custom * 0.3,
			ease: "easeInOut",
			duration: 0.5,
		}
	}),
	exit: {
		opacity: 0,
		translateY: "-200px",
	}
}