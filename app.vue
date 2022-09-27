<template>
	<Header />

	<!-- Main -->
	<main class="width-breaker">
		<h1>Hey, mijn naam is Finn Paes!</h1>

		<div class="impression-wrapper">
			<p>{{ currentImpressionTxt }} <span class="impression-cursor"></span></p>
		</div>
	</main>

	<!-- Skills -->
	<section class="width-breaker" id="skills">
		<h2>Skills</h2>
		<p>Met deze programmeer talen, software en besturingsystemen heb ik gewerkt voor een langere tijd, of werk ik nog steeds dagelijks mee.</p>

		<div class="skills-wrapper">
			<div>
				<Icons-Laravel class="icon" :width="skillWidth" :height="skillHeight" />
				<p class="title">Laravel</p>
			</div>

			<div>
				<Icons-NuxtJS class="icon" :width="skillWidth" :height="skillHeight" />
				<p class="title">NuxtJS</p>
			</div>

			<div>
				<Icons-VueJS class="icon" :width="skillWidth" :height="skillHeight" />
				<p class="title">VueJS</p>
			</div>

			<div>
				<Icons-TailwindCSS class="icon" :width="skillWidth" :height="skillHeight" />
				<p class="title">TailwindCSS</p>
			</div>

			<div>
				<Icons-Inertia class="icon" :width="skillWidth" :height="skillHeight" />
				<p class="title">InertiaJS</p>
			</div>

			<div>
				<Icons-MySQL class="icon" :width="skillWidth" :height="skillHeight" />
				<p class="title">MySQL</p>
			</div>

			<div>
				<Icons-Nginx class="icon" :width="skillWidth" :height="skillHeight" />
				<p class="title">Nginx</p>
			</div>

			<div>
				<Icons-Git class="icon" :width="skillWidth" :height="skillHeight" />
				<p class="title">Git</p>
			</div>

			<div>
				<Icons-Linux class="icon" :width="skillWidth" :height="skillHeight" />
				<p class="title">Linux</p>
			</div>

			<div>
				<Icons-Windows class="icon" :width="skillWidth" :height="skillHeight" />
				<p class="title">Windows</p>
			</div>

			<div>
				<Icons-Apple class="icon" :width="skillWidth" :height="skillHeight" />
				<p class="title">MacOS</p>
			</div>

			<div>
				<p class="title" style="color:#ccc;margin-top:0px;">En nog veel meer!</p>
			</div>
		</div>
	</section>

	<!-- Projects image preview -->
	<div class="projects-image-preview-wrapper" v-if="projectImage !== ''">
		<div>
			<Icons-Times class="icon" width="50" height="50" @click="closeProjectImage()" />
			<nuxt-img :src="`/images/projects/${projectImage}`"  />
		</div>
	</div>
	<!-- Projects -->
	<section class="width-breaker" id="projecten">
		<h2>Projecten</h2>
		<p>Ik ben erg creatief, en werk voortdurend aan nieuwe projecten. Ook heb ik veel websites voor klanten gemaakt, hieronder staan een aantal van mijn projecten.</p>

		<div class="projects-wrapper">
			<div class="project-box">
				<div>
					<div class="zoom-layer" @click="zoomProject('fortislogs.png')"><Icons-Zoom class="icon" width="50" height="50" /></div>
					<nuxt-img src="/images/projects/fortislogs.png" alt="FortisLogs website" :width="projectWidth" loading="lazy" />
				</div>
				<div>
					<h3>FortisLogs</h3>
					<p>Dit project heb ik gemaakt voor een bekend spel FiveM. FiveM is een mod voor GTA 5 die het toestaat om samen op een gemodificeerde server te spelen. Het staat erg bekend onder de naam "GTA Roleplay". Hier heb ik een tijd ook een eigen server op gehad, uiteindelijk wilde ik een manier hebben om de progressie van spelers in te zien (waar gaat het virtuele geld van spelers heen, wat wordt er in de chat tegen elkaar gezegd, etc.). Hiervoor heb ik het platform FortisLogs opgericht, wat nu door veel succesvolle servers over heel de wereld gebruikt wordt.<br/><a href="https://fortislogs.com" target="_blank">Bekijk het hier</a></p>
				</div>
			</div>

			<div class="project-box">
				<div>
					<div class="zoom-layer"  @click="zoomProject('telefoonkees.png')"><Icons-Zoom class="icon" width="50" height="50" /></div>
					<nuxt-img src="/images/projects/telefoonkees.png" alt="Telefoonkees website" :width="projectWidth" loading="lazy" />
				</div>
				<div>
					<h3>Telefoonkees</h3>
					<p>Dit is een bedrijf wat ik samen met mijn vriendin heb opgericht, ons doel was het verkopen van unieke telefoonhoesjes voor een lage prijs. Hiervoor heb ik heel de website zelf gebouwd, met als doel een goed ge-optimaliseerde website voor SEO, en een fijn te gebruiken filter.<br/><a href="https://telefoonkees.nl" target="_blank">Bekijk het hier</a></p>
				</div>
			</div>

			<div class="project-box">
				<div>
					<div class="zoom-layer"  @click="zoomProject('coppercard.png')"><Icons-Zoom class="icon" width="50" height="50" /></div>
					<nuxt-img src="/images/projects/coppercard.png" alt="Coppercard website" :width="projectWidth" loading="lazy" />
				</div>
				<div>
					<h3>CopperCard</h3>
					<p>Dit is een opkomend project samen met mijn vriendin, het verkopen van digitale visite kaartjes d.m.v. NFC pasjes. De consument kan een pasje bestellen met ons design, of het design van zijn/haar bedrijf. Vervolgens kan je een profiel instellen waar al je contact gegevens op staan, bij een toekomstige klant houd je de pas tegen de telefoon, dan opent het profiel met alle contactgegevens! Ook kan je het pasje laten doorlinken naar je website, of een andere link.</p>
				</div>
			</div>

			<div class="project-box">
				<div>
					<div class="zoom-layer"  @click="zoomProject('aymenachnine.png')"><Icons-Zoom class="icon" width="50" height="50" /></div>
					<nuxt-img src="/images/projects/aymenachnine.png" alt="Aymen achnine website" :width="projectWidth" loading="lazy" />
				</div>
				<div>
					<h3>Aymen Achnine</h3>
					<p>Deze klant kwam naar mij toe voor een portfolio website. Samen zijn we tot een design gekomen, en heb ik dit kunnen bouwen. De website heeft een eigen admin omgeving zodat mijn klant zelf blogs kan toevoegen, teksten kan veranderen etc. dit is allemaal compleet zelf gebouwd zonder enig framework, of CMS.<br/><a href="https://aymenachnine.com" target="_blank">Bekijk het hier</a></p>
				</div>
			</div>

			<div class="project-box">
				<div>
					<div class="zoom-layer"  @click="zoomProject('streamchoice.png')"><Icons-Zoom class="icon" width="50" height="50" /></div>
					<nuxt-img src="/images/projects/streamchoice.png" alt="Streamchoice website" :width="projectWidth" loading="lazy" />
				</div>
				<div>
					<h3>StreamChoice</h3>
					<p>Deze klant kwam naar mij toe met een groot project, een website voor zijn hosting bedrijf. Op dit moment runned de website op een standaard systeem. Ik ben bezig geweest deze website compleet op nieuw te bouwen met Laravel, Vue en InertiaJS. Klanten moeten een klantenomgeving hebben om hun producten in te zien, nieuwe producten te kopen, betaalomgeving met Mollie, en de website moet automatisch API's aanroepen om de servers/producten direct te leveren. Dit project is nu vrijwel klaar, en hier zal binnenkort gebruik van gemaakt worden door Streamchoice!</p>
				</div>
			</div>

			<div class="project-box">
				<div>
					<div class="zoom-layer"  @click="zoomProject('zonweringreparatie.png')"><Icons-Zoom class="icon" width="50" height="50" /></div>
					<nuxt-img src="/images/projects/zonweringreparatie.png" alt="Zonweringreparatie website" :width="projectWidth" loading="lazy" />
				</div>
				<div>
					<h3>Zonweringreparatie</h3>
					<p>Deze klant was opzoek naar een simpele website met informatie over zijn bedrijf. Voor een klein budget heb ik toch een mooie website samen met deze klant kunnen opzetten. Later kwam deze klant al terug voor een 2e website bij mij!</p>
				</div>
			</div>

			<div class="project-box">
				<div>
					<div class="zoom-layer"  @click="zoomProject('fortisroleplay.png')"><Icons-Zoom class="icon" width="50" height="50" /></div>
					<nuxt-img src="/images/projects/fortisroleplay.png" alt="FortisRoleplay website" :width="projectWidth" loading="lazy" />
				</div>
				<div>
					<h3>FortisRoleplay FiveM Server</h3>
					<p>Zoals te lezen in het project "FortisLogs", heb ik een eigen FiveM server gehad. Ik heb dit samen gedaan met +/- 8 andere mensen. Samen was ons doel de meest unieke en leuke server te maken voor Nederland. Wij zijn uiteindelijk uitegegroeid tot een van de grootste FiveM servers in Nederland, en hebben in totaal meer dan 8.000 unieke spelers mogen verwelkomen! Elke dag speelde er honderden mensen op onze server. Na meer dan anderhalf jaar besloten we op ons hoogtepunt hier een einde aan te brengen, dit project kosten enorm veel tijd terwijl het drukker werd met school, werk etc. Ik was de eigenaar van FortisRoleplay en heb 4 andere mensen leren programmeren met de taal Lua, om mee te werken aan dit project!</p>
				</div>
			</div>

			<div class="project-box">
				<div>
					<div class="zoom-layer"  @click="zoomProject('fortisadmin.png')"><Icons-Zoom class="icon" width="50" height="50" /></div>
					<nuxt-img src="/images/projects/fortisadmin.png" alt="FortisRoleplay admin panel website" :width="projectWidth" loading="lazy" />
				</div>
				<div>
					<h3>FortisRoleplay Admin Panel</h3>
					<p>Dit is ook een groot project geweest voor de FiveM server FortisRoleplay, wij wilde de mogelijkheid om spelers te kunnen beheren zonder in de database te moeten zoeken (een soort CMS dus). Hierbij konden wij snel inzien wie er op de server aan het spelen was, en konden wij verschillende acties op spelers uitvoeren zoals: het verbannen van deze speler (dit gebeurde als iemand aan het hacken (valsspelen) was, mensen uitschold, etc.), zien wat deze speler in het spel bij zich droeg qua items, notities op de naam van een speler zetten, en nog veel meer!</p>
				</div>
			</div>
		</div>
	</section>

	<!-- Contact -->
	<section class="width-breaker" id="contact">
		<h2>Contact</h2>
		<p>Wil je meer over mij weten, of iets vragen? Dan kan je contact opnemen via het onderstaande contact formulier.</p>

		<div class="contact-wrapper">
			<div>
				<form @submit.prevent="submitContact()">
					<input type="text" placeholder="Naam" v-model="form.name" required><br/>
					<input type="email" placeholder="Email" v-model="form.email" required><br/>
					<textarea placeholder="Bericht" rows="7" v-model="form.message" required></textarea><br/>

					<button>Verstuur</button>
				</form>
			</div>
			<div>
				<Icons-ContactDesk />
			</div>
		</div>
		
	</section>

	<Footer />
</template>

<style scoped>
main {
	width: 100%;
	height: 750px;
	padding-top: 250px;
}

main h1 {
	font-size: 3.5rem;
	font-weight: 600;
	letter-spacing: 1px;
	text-align: center;
	margin-bottom: 40px;
	color: var(--dark);
}

main .impression-wrapper {
	margin: auto;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-pack: center;
	    -ms-flex-pack: center;
	        justify-content: center;
	-webkit-box-align: center;
	    -ms-flex-align: center;
	        align-items: center;
	height: 100px;
	width: 400px;
	background-color: var(--black);
}

main .impression-wrapper p {
	text-align: center;
	font-size: 3rem;
	font-weight: 900;
	color: var(--white);
}

main .impression-wrapper p .impression-cursor {
	height: 100%;
	padding: 4px;
	margin-left: 5px;
	background-color: var(--light-blue);
	-webkit-animation: blink 3s infinite both;
    animation: blink 3s infinite both;
}

@keyframes blink {
	0%, 50%, 100% {
		opacity: 1;
	}
	25%, 75% {
		opacity: 0;
	}
}

/* Skills */
.skills-wrapper {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: stretch;
	    -ms-flex-align: stretch;
	        align-items: stretch;
	-ms-flex-wrap: wrap;
	    flex-wrap: wrap;
	gap: 20px;
}

.skills-wrapper > div {
	width: calc(25% - 15px);
	background-color: var(--white);
	border-radius: 5px;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-pack: center;
	    -ms-flex-pack: center;
	        justify-content: center;
	-webkit-box-align: center;
	    -ms-flex-align: center;
	        align-items: center;
	-webkit-box-orient: vertical;
	-webkit-box-direction: normal;
	    -ms-flex-direction: column;
	        flex-direction: column;
	padding: 40px 0px;
	-webkit-transition: .25s ease-in-out;
	-o-transition: .25s ease-in-out;
	transition: .25s ease-in-out;
}

.skills-wrapper > div:hover {
	-webkit-box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
	        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.skills-wrapper .icon {
	width: 100px;
}

.skills-wrapper .title {
	text-align: center;
	font-size: 1.5rem;
	font-weight: 500;
	color: var(--dark);
	margin-top: 30px;
}

/* Projects */
.projects-wrapper {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-align: stretch;
	    -ms-flex-align: stretch;
	        align-items: stretch;
	-ms-flex-wrap: wrap;
	    flex-wrap: wrap;
	gap: 20px;
}

.projects-wrapper > div {
	width: calc(50% - 10px);
	background-color: var(--white);
	border-radius: 5px;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	padding: 25px;
	-webkit-transition: .25s ease-in-out;
	-o-transition: .25s ease-in-out;
	transition: .25s ease-in-out;
	gap: 25px;
}

.projects-wrapper > div:hover {
	-webkit-box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
	        box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.project-box > div {
	position: relative;
	height: -webkit-fit-content;
	height: -moz-fit-content;
	height: fit-content;
}

.project-box img {
	border-radius: 5px;
}

.project-box a {
	text-decoration: none;
	color: var(--light-blue);
	margin-top: 5px;
}

.project-box .zoom-layer {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: calc(100% - 2px);
	border-radius: 5px;
	background-color: rgba(172, 172, 172, 0.5);
	opacity: 0;
	-webkit-transition: .25s ease-in-out;
	-o-transition: .25s ease-in-out;
	transition: .25s ease-in-out;
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-pack: center;
	    -ms-flex-pack: center;
	        justify-content: center;
	-webkit-box-align: center;
	    -ms-flex-align: center;
	        align-items: center;
	cursor: pointer;
}

.project-box .zoom-layer:hover {
	opacity: 1;
}

.projects-wrapper h3 {
	font-size: 1.3rem;
	font-weight: 500;
	color: var(--dark);
	margin-bottom: 10px;
}

.projects-wrapper p {
	font-size: .95rem;
	font-weight: 400;
	color: var(--dark);
}

/* Projects image preview, fullscreen dus */
.projects-image-preview-wrapper {
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 999;
	background-color: rgba(172, 172, 172, 0.9);
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-pack: center;
	    -ms-flex-pack: center;
	        justify-content: center;
	-webkit-box-align: center;
	    -ms-flex-align: center;
	        align-items: center;
}

.projects-image-preview-wrapper div {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-pack: center;
	    -ms-flex-pack: center;
	        justify-content: center;
	-webkit-box-align: center;
	    -ms-flex-align: center;
	        align-items: center;
	position: relative;
	width: 80%;
}

.projects-image-preview-wrapper img {
	border-radius: 10px;
	width: 100%;
  	-o-object-fit: cover;
  	   object-fit: cover;
}

.projects-image-preview-wrapper .icon {
	position: absolute;
	top: -20px;
	right: -20px;
	background-color: var(--white);
	border-radius: 100%;
	padding: 5px;
	z-index: 200;
	cursor: pointer;
}

.contact-wrapper {
	display: -webkit-box;
	display: -ms-flexbox;
	display: flex;
	-webkit-box-pack: justify;
	    -ms-flex-pack: justify;
	        justify-content: space-between;
	-webkit-box-align: center;
	    -ms-flex-align: center;
	        align-items: center;
	-ms-flex-wrap: wrap;
	    flex-wrap: wrap;
	gap: 20px;
}

.contact-wrapper > div {
	width: calc(50% - 10px);
}

.contact-wrapper div input, textarea, button {
	font-family: "Inter";
}

.contact-wrapper div input[type="text"], input[type="email"], textarea {
	outline: none;
	border: none;
	background: none;
	background-color: var(--white);
	border-radius: 5px;
	width: 500px;
	margin: 5px 0px;
	padding: 6px 5px;
	border: 2px solid transparent;
	-webkit-transition: .20s ease-in-out;
	-o-transition: .20s ease-in-out;
	transition: .20s ease-in-out;
	font-weight: 400;
	font-size: 1rem;
}

.contact-wrapper div textarea {
	resize: none;
}

.contact-wrapper div input[type="text"]:focus, input[type="email"]:focus, textarea:focus {
	border: 2px solid var(--dark);
}

.contact-wrapper div button {
	outline: none;
	border: none;
	background: none;
	background-color: var(--dark);
	color: var(--white);
	font-size: 1.1rem;
	font-weight: 600;
	text-align: left;
	border-radius: 5px;
	margin: 5px 0px;
	padding: 6px 20px;
	border: 2px solid transparent;
	-webkit-transition: .10s ease-in-out;
	-o-transition: .10s ease-in-out;
	transition: .10s ease-in-out;
	cursor: pointer;
}

.contact-wrapper div button:hover {
	background-color: var(--white);
	border: 2px solid var(--dark);
	color: var(--dark);
}

.contact-wrapper .illustration {
	width: 70%;
	margin: auto;
	display: block;
}


/* Media queries */
@media only screen and (max-width: 1300px) {
	.projects-wrapper > div {
		-webkit-box-orient: vertical;
		-webkit-box-direction: normal;
		    -ms-flex-direction: column;
		        flex-direction: column;
	}
	.projects-wrapper > div img {
		width: 100%;
		height: 100%;
	}
	.project-box .zoom-layer {
		height: 100%;
	}
	.contact-wrapper .illustration {
		width: 60%;
	}
}

@media only screen and (max-width: 1030px) {
	.skills-wrapper {
		gap: 10px;
	}
	.skills-wrapper > div {
    	width: calc(33.33% - 7px);
	}
	.contact-wrapper > div {
		width: 100%!important;
	}
	.contact-wrapper .illustration {
		display: none;
	}
	.contact-wrapper div input[type="text"], input[type="email"], textarea {
		width: 100%;
	}
}

@media only screen and (max-width: 800px) {
	.projects-wrapper > div {
		width: 100%;
	}
}

@media only screen and (max-width: 735px) {
	section > p {
		width: 100%;
	}
}

@media only screen and (max-width: 670px) {
	.skills-wrapper {
		gap: 10px;
	}
	.skills-wrapper > div {
    	width: calc(50% - 5px);
	}
}

@media only screen and (max-width: 600px) {
	main h1 {
		font-size: 2.8rem;
	}
	main .impression-wrapper {
		width: 90%;
	}
	main .impression-wrapper p {
		font-size: 2rem;
	}
}

@media only screen and (max-width: 540px) {
	.skills-wrapper > div {
		width: 100%;
	}
}
</style>

<script>
export default {
	setup() {
		useHead({
			title: "Finn Paes - Front- & Backend Web Developer",
			meta: [
				{ name: "description", content: "Ik ben een Front- & Backend Web Developer, altijd op zoek naar de beste oplossingen. Werkend met Laravel, VueJS, NuxtJS, InertiaJS, TailwindCSS en nog veel meer!" }
  			],
		})
	},

	data() {
		return {
			currentImpression: 0,
			currentImpressionTxt: "",

			impressions: [
				"Web Developer",
				"Ondernemer",
				"ICT'er"
			],

			skillWidth: 200,
			skillHeight: 100,

			projectWidth: 250,
			projectHeight: 140,

			projectImage: "",

			form: {
				name: "",
				email: "",
				message: ""
			}
		}
	},

	mounted() {
		if (process.client) {
			// Begin process met impressions
			this.addLetter();

			// Check breedte van scherm voor grote van skill images
			this.calculateImageSizes();
			window.addEventListener("resize", this.calculateImageSizes);
			
		}
	},

	methods: {
		addLetter() {
			let newNumber;
			if (this.currentImpressionTxt.length < 1) {
				// Er staat nog niks in de impression, dus start vanaf letter 0
				newNumber = 0;
			} else {
				// Er staat al iets in de impression, +1
				newNumber = (this.currentImpressionTxt.length - 1) + 1;
			}
			// Check of het woord al voorbij is
			if (newNumber >= this.impressions[this.currentImpression].length) {
				setTimeout(() => {
					this.removeLetter();
				}, 5000);
				return;
			}
			this.currentImpressionTxt += this.impressions[this.currentImpression][newNumber];
			
			setTimeout(() => {
				this.addLetter();
			}, 90);
		},

		removeLetter() {
			if (this.currentImpressionTxt.length > 0) {
				this.currentImpressionTxt = this.currentImpressionTxt.slice(0, -1);
			} else {
				if ((this.currentImpression + 1) === this.impressions.length) {
					this.currentImpression = 0;
				} else {
					this.currentImpression = this.currentImpression + 1;
				}
					this.addLetter();
				return;
			}

			setTimeout(() => {
				this.removeLetter();
			}, 110);
		},

		zoomProject(imageName) {
			this.projectImage = imageName;
			document.body.style.overflowY = "hidden";
		},

		closeProjectImage() {
			this.projectImage = "";
			document.body.style.overflowY = "auto";
		},

		calculateImageSizes() {
			if (window.matchMedia("(max-width: 800px)").matches) {
				this.projectWidth = 650;
				this.projectHeight = 370;
			}
			if (window.matchMedia("(max-width: 890px)").matches) {
				this.skillWidth = 150;
				this.skillHeight = 80;
			}
			if (window.matchMedia("(max-width: 1300px)").matches) {
				this.projectWidth = 540;
				this.projectHeight = 305;
			} else {
				this.projectWidth = 250;
				this.projectHeight = 140;
			}
		},

		submitContact() {
			if (this.form.name.replace(/\s/g, "").length &&
				this.form.email.replace(/\s/g, "").length &&
				this.form.message.replace(/\s/g, "").length
			) {
				// Forms zijn ingevuld
				useFetch("/api/mail", {
					method: "POST",
					initialCache: false,
					body: {
						name: this.form.name,
						email: this.form.email,
						message: this.form.message
					}
				}).then(res => {
					res = res.data['_rawValue'];
					if (res === true) {
						this.$swal.fire(
							"Verzonden!",
							"Het contact formulier is succesvol verzonden. Je zal zo snel mogelijk een antwoord terug krijgen!",
							"success"
						);
						this.form.name = ""; this.form.email = ""; this.form.message = "";
					} else {
						this.$swal.fire(
							"Fout...",
							"Er is iets fout gegaan... Ik zal dit zo snel mogelijk oplossen! (Fout melding verstuurd)",
							"error"
						);
					}
				})
			}
		}
	}
}
</script>