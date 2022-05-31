var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({triggerElement: "#trigger1"})
					// trigger animation by adding a css class
					.setClassToggle(".container-cube", "cube-active")
					.addIndicators({name: "1 - add a class"}) // add indicators (requires plugin)
					.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: "#trigger2"})
					// trigger animation by adding a css class
					.setClassToggle(".about-container", "about-magic")
					.addIndicators({name: "2 - add a class"}) // add indicators (requires plugin)
					.addTo(controller);
var scene = new ScrollMagic.Scene({triggerElement: "#trigger3"})
					// trigger animation by adding a css class
					.setClassToggle(".card", "card-magic")
					.addIndicators({name: "3 - add a class"}) // add indicators (requires plugin)
					.addTo(controller);