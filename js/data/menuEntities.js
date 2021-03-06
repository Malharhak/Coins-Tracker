define (["config"], function (config) {
    var menuEntities = {
        background: {
            position: {x: 0, y: 0},
            components: {
                renderer: {
                    imageName: "board",
                    pivot: {x: 0, y: 0}
                }
            }
        },
        title: {
            position: {x: config.canvas.width / 2, y: 0},
            components: {
                renderer: {
                    imageName: "menu_title",
                    position: {x: 0, y: -100},
                    animation: {
                        target: ["position"],
                        duration: 1,
                        properties: {
                            y: 150,
                            ease: Back.easeOut,
                            delay: 0.2
                        }
                    }
                }
            }
        },
        infos: {
            position: {x: 0, y: 0},
            components: {
                renderer: {
                    imageName: "menu_info",
                    pivot: {x: 0, y: 0},
                    alpha: 0,
                    animation: {
                        duration: 1,
                        properties: {
                            alpha: 1,
                            ease: Circ.easeOut,
                            delay: 2
                        }
                    }
                }
            }
        },
        betInfo: {
            position: {x: config.canvas.width / 2 - 50, y: config.canvas.height / 2 + 200},
            components: {
                renderer: {
                    imageName: "coins_1",
                    alpha: 0,
                    scale: 0.8,
                    animation: {
                        duration: 1,
                        properties: {
                            alpha: 1,
                            ease: Circ.easeOut,
                            delay: 2.5
                        }
                    },
                    label : {
                        font: "40px 'Lucida Sans Unicode', 'Lucida Grande', sans-serif",
                        fillStyle: "black",
                        textAlign: "left",
                        position : {x: -75, y: 0},
                        text: "1     => 1£"
                    }
                }
            }
        },

        playButton: {
            position : {
                x: config.canvas.width / 2,
                y: config.canvas.height / 2
            },
            components: {
                renderer: {
                    imageName: "button_normal",
                    scale: 0.001,
                    label: {
                        font: "48px 'Lucida Sans Unicode', 'Lucida Grande', sans-serif",
                        fillStyle: "white",
                        textAlign: "center",
                        position : {x: 0, y: 0},
                        text: "play"
                    },
                    animation : {
                        duration: 0.5,
                        properties: {
                            scale: 1,
                            ease: Expo.easeOut,
                            delay: 1
                        }
                    }
                },
                inputable: {},
                gameButton: {
                    normalImage: "button_normal",
                    pressedImage: "button_pressed",
                    overImage: "button_over"
                }
            }
        },
        minusButton: {
            position : {
                x: config.canvas.width / 2 - 112,
                y: config.canvas.height / 2 + 100
            },
            components: {
                renderer: {
                    imageName: "minus_normal",
                    scale: 0.001,
                    animation : {
                        duration: 0.5,
                        properties: {
                            scale: 1,
                            ease: Expo.easeOut,
                            delay: 0.5
                        }
                    }
                },
                inputable: {},
                gameButton: {
                    normalImage: "minus_normal",
                    pressedImage: "minus_pressed",
                    overImage: "minus_over"
                }
            }
        },
        plusButton: {
            position : {
                x: config.canvas.width / 2 + 112,
                y: config.canvas.height / 2 + 100
            },
            components: {
                renderer: {
                    imageName: "plus_normal",
                    scale: 0.001,
                    animation : {
                        duration: 0.5,
                        properties: {
                            scale: 1,
                            ease: Expo.easeOut,
                            delay: 0.5
                        }
                    }
                },
                inputable: {},
                gameButton: {
                    normalImage: "plus_normal",
                    pressedImage: "plus_pressed",
                    overImage: "plus_over"
                }
            }
        },
        bettingText: {
            position : {
                x: config.canvas.width / 2,
                y: config.canvas.height / 2 + 100
            },
            components: {
                renderer: {
                    imageName: "text_zone",
                    scale: 0.001,
                    label: {
                        font: "48px 'Lucida Sans Unicode', 'Lucida Grande', sans-serif",
                        fillStyle: "black",
                        textAlign: "right",
                        position : {x: 70, y: 0},
                        text: "10£"
                    },
                    animation : {
                        duration: 0.5,
                        properties: {
                            scale: 1,
                            ease: Expo.easeOut,
                            delay: 0.5
                        }
                    }
                },
                bettingDisplay: {}
            }
        },

    };

    return menuEntities;
});