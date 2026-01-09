'use client';

import { motion } from 'framer-motion';

export default function ContactSection() {
	return (
		<section id="contact" className="relative py-20 sm:py-32 border-t border-slate-700 overflow-hidden">
			{/* Background gradient */}
			<div className="absolute inset-0 -z-10">
				<div className="absolute bottom-0 left-1/2 w-96 h-96 -translate-x-1/2 bg-blue-500/10 rounded-full blur-3xl"></div>
			</div>

			<div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div 
					initial={{ opacity: 0, y: 20 }} 
					whileInView={{ opacity: 1, y: 0 }} 
					viewport={{ once: true }} 
					className="text-center space-y-8"
				>
					<div>
					<h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
						Get In Touch
					</h2>
					<div className="h-1 w-16 bg-gradient-to-r from-teal-400 to-cyan-400 mx-auto mt-4"></div>
					</div>

					<p className="text-gray-300 text-lg">Interested in working together? Let&apos;s start a conversation.</p>

					{/* Location */}
					<div className="flex items-center justify-center gap-3 text-gray-300 bg-gradient-to-r from-slate-800 to-slate-700 p-6 rounded-xl border border-slate-600">
						<svg className="w-6 h-6 text-cyan-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
							/>
							<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
						</svg>
						<div className="text-left">
							<p className="font-semibold text-white">Based In</p>
							<p>Bangalore, KA & Alappuzha, Kerala</p>
						</div>
					</div>

					{/* Contact Buttons */}
					<div className="flex flex-col sm:flex-row justify-center gap-4 flex-wrap">
						<a
							href="https://wa.me/918075638247?text=Hi%20Dion%2C%20I%20would%20like%20to%20connect%20with%20you!"
							className="px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-green-500/50 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2"
							target="_blank"
							rel="noopener noreferrer"
						>
							<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
								<path d="M12.004 2.003c-5.522 0-9.997 4.475-9.997 9.997 0 1.762.462 3.488 1.337 4.997L2 22l5.18-1.354c1.464.802 3.126 1.23 4.824 1.23 5.522 0 9.997-4.475 9.997-9.997s-4.475-9.997-9.997-9.997zm0 18.182c-1.533 0-3.036-.404-4.335-1.172l-.31-.184-3.073.803.822-2.995-.202-.319c-.823-1.3-1.257-2.804-1.257-4.335 0-4.411 3.587-7.998 7.998-7.998s7.998 3.587 7.998 7.998-3.587 7.998-7.998 7.998zm4.326-6.209c-.236-.118-1.396-.688-1.613-.767-.217-.08-.375-.118-.534.118-.158.236-.612.767-.75.925-.138.158-.276.177-.512.059-.236-.118-.996-.366-1.897-1.168-.7-.623-1.173-1.392-1.312-1.627-.138-.236-.015-.363.104-.48.107-.106.236-.276.355-.414.12-.138.159-.236.238-.394.08-.158.04-.296-.02-.414-.059-.117-.534-1.287-.731-1.76-.192-.462-.388-.4-.534-.408-.138-.008-.296-.01-.454-.01s-.414.059-.632.276c-.217.217-.822.803-.822 1.957 0 1.154.842 2.27.958 2.428.118.158 1.658 2.53 4.021 3.447.563.194 1 .309 1.342.396.563.143 1.076.123 1.482.075.452-.054 1.396-.57 1.593-1.122.197-.553.197-1.027.138-1.122-.059-.094-.216-.153-.452-.271z"/>
							</svg>
							WhatsApp Me
						</a>
						<a
							href="/2finalCvUpdate_020126.pdf"
							target="_blank"
							rel="noopener noreferrer"
							className="px-6 py-3 border-2 border-teal-400 text-teal-300 font-semibold rounded-lg hover:bg-teal-500/10 transition-all duration-300 hover:scale-105 inline-flex items-center justify-center gap-2"
							aria-label="View Resume PDF"
							title="View Dion's Resume"
						>
							<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
								<path
									fillRule="evenodd"
									d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z"
									clipRule="evenodd"
								/>
								<path fillRule="evenodd" d="M8 11a1 1 0 100 2h4a1 1 0 100-2H8zm0-4a1 1 0 100 2h4a1 1 0 100-2H8z" clipRule="evenodd" />
							</svg>
								View Resume
						</a>
					</div>

					{/* Social Links */}
					<div className="pt-6 border-t border-slate-700">
						<p className="text-gray-400 text-sm mb-4">Connect with me on</p>
						<div className="flex justify-center gap-6 flex-wrap">
							<a 									href="https://www.codechef.com/users/hexval_zjmk749"
									target="_blank"
									rel="noopener noreferrer"
									className="text-gray-400 hover:text-orange-400 hover:scale-110 transition-all duration-300"
									aria-label="CodeChef Profile"
									title="CodeChef"
								>
									<svg className="w-6 h-6" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
										<g>
											<rect width="32" height="32" rx="16" fill="currentColor"/>
											<path d="M23.947 19.2c-1.458.23-2.529.198-3.055-.277-2.09-1.833-.961-5.782-1.154-5.782-.145 0-1.475 2.66-.708 6.334.601 2.943-4.184 1.709-5.823 1.175-.338-.108-.86.057-1.236.44-.346.355-.455.854-.18 1.155.425.46 1.51.796 2.773 1.076 2.057.452 5.246.565 7.049-.695.483-.339.323-1.273-.666-1.426z" fill="#fff"/>
											<ellipse cx="16" cy="12.167" rx="7.833" ry="8.167" fill="#fff"/>
											<ellipse cx="12.25" cy="11.25" rx="1.25" ry="1.25" fill="currentColor"/>
											<ellipse cx="19.75" cy="11.25" rx="1.25" ry="1.25" fill="currentColor"/>
										</g>
									</svg>
								</a>

								<a 								href="https://github.com/devzjmattk49" 
								target="_blank" 
								rel="noopener noreferrer" 
								className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-300"
								aria-label="GitHub Profile"
								title="GitHub"
							>
								<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
									<path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
								</svg>
							</a>

							<a
							href="https://www.behance.net/creatordjmk49"
							target="_blank"
							rel="noopener noreferrer"
								className="text-gray-400 hover:text-cyan-400 hover:scale-110 transition-all duration-300"
								aria-label="Behance Profile"
								title="Behance"
							>
								<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
									<path d="M8.67 10.13c.64-.32 1.01-.94 1.01-1.8 0-1.58-1.09-2.33-3.17-2.33H0v8.01h6.97c2.15 0 3.25-.9 3.25-2.68 0-1.01-.37-1.7-1.13-2.07zm-4.7-2.05h2.28c.84 0 1.27.34 1.27 1.03 0 .7-.43 1.04-1.27 1.04H3.97v-2.07zm2.45 5.6H3.97v-2.22h2.52c.98 0 1.47.38 1.47 1.11 0 .73-.49 1.11-1.54 1.11zm8.34-2.42c-2.09 0-3.37 1.47-3.37 3.75 0 2.16 1.2 3.59 3.16 3.59 1.58 0 2.69-.73 3.09-2.09h-1.52c-.19.44-.58.7-1.19.7-.84 0-1.33-.55-1.4-1.65h4.62v-.77c0-2.19-1.12-3.53-3.39-3.53zm-1.15 2.94c.09-.97.64-1.49 1.54-1.49.87 0 1.39.56 1.45 1.49h-2.99zm7.5-2.94c-1.36 0-2.28.53-2.8 1.61l1.31.55c.21-.5.67-.77 1.37-.77.81 0 1.23.33 1.23.97v.14c-.28-.08-.7-.17-1.27-.17-1.54 0-2.32.65-2.32 1.93 0 1.17.81 1.85 2.17 1.85.9 0 1.47-.29 1.81-.91h.02v.78h1.46v-3.29c0-1.31-.79-2.06-2.18-2.06zm-.19 4.11c-.56 0-.89-.23-.89-.65 0-.44.34-.65 1.07-.65.38 0 .7.05.91.14v.33c0 .57-.39.83-1.09.83zm-3.21-7.4h4.01v1.13h-4.01v-1.13z"/>
								</svg>
							</a>

							<a 
								href="https://dribbble.com/designerZeusjmk721" 
								target="_blank" 
								rel="noopener noreferrer" 
								className="text-gray-400 hover:text-pink-400 hover:scale-110 transition-all duration-300"
								aria-label="Dribbble Profile"
								title="Dribbble"
							>
								<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
									<path d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm6.93 6.36c2.05 2.46 2.22 6.02.43 8.66-.26-.41-2.02-3.06-6.58-2.48-.13-.31-.25-.62-.39-.93.14-.03.28-.05.42-.08 5.89-1.13 5.47-4.28 5.36-4.83zm-6.93-4.36c2.13 0 4.09.84 5.56 2.2-.19.27-1.84 2.46-5.12 3.2-1.63-3.01-3.41-5.11-3.62-5.36C8.65 3.12 10.27 2 12 2zm-4.21 1.86c.29.33 1.98 2.4 3.57 5.34-5.01 1.34-9.13 1.24-9.37 1.23C2.99 5.93 7.01 2.7 7.79 1.86zM2.05 12.18c0-.18.01-.36.02-.54.26.01 4.64.08 9.8-1.27-.25.5-.48 1-.68 1.51-6.13 1.82-8.34 5.58-8.47 5.79-.43-1.06-.67-2.21-.67-3.49zm1.52 5.09c.14-.23 2.08-3.22 8.05-5.02.44 1.13.8 2.29 1.07 3.47-6.74 2.01-8.97 5.03-9.12 5.25.54-.86 1.19-1.63 2-2.27zm2.61 2.93c.17-.24 2.18-2.91 8.44-4.83.13.47.24.94.33 1.42-6.37 1.54-8.79 4.61-8.77 4.64zm5.82 1.14c-1.49 0-2.91-.36-4.14-1 .22-.28 2.7-3.18 9.17-4.69.21.82.36 1.66.44 2.52-4.23 1.17-5.89 2.83-5.91 2.85-.18.18-.43.32-.71.32zm6.16-1.12c-.12-.13-1.44-1.42-5.56-2.67.06-.77.17-1.53.33-2.28 4.36-.56 6.24 1.49 6.29 1.54-.41 1.13-1.09 2.13-2.06 2.87zm2.01-4.36c-.32-.34-2.13-1.98-6.5-1.57.18-.48.39-.96.61-1.43 4.33-.62 6.19 1.18 6.23 1.23-.09.61-.25 1.2-.34 1.77z"/>
								</svg>
							</a>
						</div>
					</div>

					<p className="text-gray-500 text-xs pt-4">Looking forward to connecting with you!</p>
				</motion.div>
			</div>
		</section>
	);
}
