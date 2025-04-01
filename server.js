app.post('/login', async (req, res) => {
    const { nome_usuario, senha } = req.body;

    try {
        const { data, error } = await supabase
            .from('clientes')
            .select('*')
            .eq('nome_usuario', nome_usuario);

        if (error || data.length === 0) {
            return res.status(401).send('Usuário ou senha inválidos.');
        }

        const cliente = data[0];

        // Validar senha (pode usar hash se quiser melhorar a segurança)
        if (cliente.senha !== senha) {
            return res.status(401).send('Usuário ou senha inválidos.');
        }

        res.status(200).send('Login realizado com sucesso!');
    } catch (error) {
        console.error('Erro ao realizar login:', error);
        res.status(500).send('Erro ao realizar login.');
    }
});
