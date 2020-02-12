import React from 'react'
import { Link } from 'react-router-dom'
import NavHome from '../../components/NavHome'
import './style.css'


function Home() {
 
	return (<>
	<div className="fluid-container bg-comments">
		<NavHome />
		<div className="painel">
			<h1>Não perca nenhuma mensagem!</h1>
			<p>O <strong>GerenciaZap</strong> é uma ferramenta de captura de contatos completa! Não perca nenhuma mensagem enviada em seu Site, acesse sua lista de contatos e muito mais!</p>
			<a href="" className="btn-primary">GANHE R$15,90 PARA TESTAR</a>
		</div>
	</div>
		<section className="fluid-container complete" id="functionalities">
			<div className="container">
				<div>
					<div>
						<h1>Obtenha uma ferramenta completa!</h1>
						<p className="subtitle">Com o <strong>GerenciaZap</strong> você poderá acessar todas as mensagens, até mesmo as que não foram enviadas pelo WhatsApp Web, podendo responder a todas as solicitações de seus Clientes.</p>
						<p>Além disso, utilize sua lista de Contatos para realizar suas Campanhas de E-mail Marketing com o público alvo certo!</p>
						<a href="" className="btn-primary center">GANHE R$15,90 PARA TESTAR</a>
					</div>
				</div>
				<div>
					<img src="/img/flat-mobile.png" alt="Obtenha uma ferramenta completa!" title="Obtenha uma ferramenta completa!" />
				</div>
			</div>
		</section>
		<section className="container functionalities">
			<div>
				<img src="/img/whatsapp-icon.svg" alt="WhatsApp Web" title="WhatsApp Web" />
				<h2>WhatsApp Web</h2>
				<p>A mensagem é salva no seu perfil mesmo que o usuário não conclua o envio no WhatsApp Web</p>
			</div>
			<div>
				<img src="/img/phonebook.svg" alt="Lista de Contatos" title="Lista de Contatos" />
				<h2>Lista de Contatos</h2>
				<p>Todos os números são salvos em uma lista de contatos para você utilizar em suas Campanhas de Marketing</p>
			</div>
			<div>
				<img src="/img/file.svg" alt="Relatório" title="Relatório" />
				<h2>Relatório</h2>
				<p>Geramos um relatório informando a frequencia das mensagens e quais as páginas do seu site que atraíram mais contatos</p>
			</div>
		</section>
		<section className="container-fluid signature" id="signature">
			<div className="container">
				<h2>Assine por apenas R$15,90 mensais</h2>
				<p>E só pague à partir do Segundo Mês de uso! Assim você garante uma lista completa de Contatos e não perca mais nenhuma Mensagem!</p>
				<form action="" method="post" className="form">
					<div><input type="text" placeholder="Seu Nome" name="name" required /></div>
					<div><input type="email" placeholder="Seu melhor E-mail" name="email" required /></div>
					<div><input type="tel" placeholder="Seu WhatsApp" name="tel" required /></div>
					<div><button type="submit">ASSINAR</button></div>
				</form>
			</div>
		</section>
		<section className="container how-to" id="how-to">
			<h2>COMO INTEGRAR?</h2>
			<p>Com apenas três passos você consegue integrar em seu Site e começar a captar novos clientes!</p>
			<div>
				<div>
					<img src="/img/select-option.png" alt="Personalize" title="Personalize" />
					<h3>Personalize</h3>
					<p>Escolha e configure um tema.</p>
				</div>
				<div>
					<img src="/img/generate-link.png" alt="Link" title="Link" />
					<h3>Link</h3>
					<p>Gere o link do seu Script.</p>
				</div>
				<div>
					<img src="/img/add-site.png" alt="Adicione" title="Adicione" />
					<h3>Adicione</h3>
					<p>Adicione o Script em seu Site.</p>
				</div>
			</div>
		</section>
		<section className="fluid-container help-us" id="support">
			<div className="container">
				<div>
					<span>
						<h2>E SE PRECISAR DE AJUDA..</h2>
						<p>É só chamar no Zap! Aqui tem GENTE disposta a te ajudar sempre!</p>
					</span>
				</div>
				<div>
					<img src="/img/support.png" alt="É só chamar no Zap! Aqui tem GENTE disposta a te ajudar sempre!" title="É só chamar no Zap! Aqui tem GENTE disposta a te ajudar sempre!" />
				</div>
			</div>
			<div>
				
			</div>
		</section>
		<section className="container signature-container">
			<h2>Assine por apenas R$15,90 mensais</h2>
			<p>Comece a receber mensagens de seus clientes agora mesmo!</p>
			<p>Cadastre-se e ganhe R$15,90 para utilizar no período de um mês!</p>
			<a href="" className="btn-primary center">GANHE R$15,90 PARA TESTAR</a>
		</section>
		<footer className="fluid-container">
			<div className="container link-footer">
				<div>
					<img src="/img/logo.png" alt="" />
				</div>
				<div className="links-map">
					<a href="#functionalities">Funcionalidades</a> <a href="#signature">Assinatura</a> <a href="#how-to">Integração</a> <a href="#support">Suporte</a> <a href="#">Login</a> <a href="#">Cadastre-se</a>
				</div>
				<div>
					<a href="https://wule.com.br/" target="_blank" rel="noopener noreferrer"><img src="http://wule.com.br/img/logo.png" alt="Agência Digital Wule" title="Agência Digital Wule" className="wule-logo" /></a>
				</div>
			</div>
			<div className="container copyright">
				Copyright @ 2020 - Todos os Direitos Reservados - Agência Digital Wule
			</div>
		</footer>
		<script src="/js/script.js"></script>
	</>)
}

export default Home