import React from "react";
import { Container, Grid, Image } from 'semantic-ui-react';
import MenuSistema from '../../MenuSistema';

class Home extends React.Component{

    render(){
        return(
            <div>
                <MenuSistema/>
                <div style={{marginTop: '5%'}}>
                    <Container>
                        <Grid columns={2} divided>
                            <Grid.Row>
                                <Grid.Column>
                                    <Image src='/logo-IFPE.png' size='large' />
                                </Grid.Column>
                                <Grid.Column>
                                    
                                    Bem vindo ao sistema <strong>OxeFood</strong> ! <br/>
                                    Este sistema foi desenvolvido na disciplina de Desenvolvimento para WEB III. <br/> <br/>

                                    Para acessar o código da <strong>API</strong> do sistema, acesse: <a href='https://github.com/1wicky/oxefood-api-Josimeyrisson' target='_blank'> https://github.com/1wicky/oxefood-api-Josimeyrisson </a> <br/> <br/>
                                    Para acessar o código do <strong>Módulo WEB</strong>, acesse: <a href='https://github.com/1wicky/oxefood-web-josimeyrisson' target='_blank'> https://github.com/1wicky/oxefood-web-josimeyrisson </a>

                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                    </Container>
                </div>
            </div>
        )
    }
}

export default Home;