const request = require('supertest');

const API_URL = 'http://lojaebac.ebaconline.art.br';
const AUTH_HEADER = 'Basic YWRtaW5fZWJhYzpAYWRtaW4hJmJAYyEyMDIy'; // admin_ebac : @admin!&b@c!2022

describe('US-0003: API de Cupons', () => {

  test('CT-05: Deve listar todos os cupons com sucesso (GET)', async () => {
    const response = await request(API_URL)
      .get('/wp-json/wc/v3/coupons')
      .set('Authorization', AUTH_HEADER);

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  test('CT-06: Deve cadastrar um novo cupom com sucesso (POST)', async () => {
    const cupomCodigo = `TESTE_${Date.now()}`;

    const response = await request(API_URL)
      .post('/wp-json/wc/v3/coupons')
      .set('Authorization', AUTH_HEADER)
      .send({
        code: cupomCodigo,
        amount: '10.00',
        discount_type: 'fixed_product',
        description: 'Cupom de teste automatizado'
      });

    expect(response.status).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body.code).toBe(cupomCodigo.toLowerCase());
  });

  test('CT-07: Não deve permitir cadastrar cupom com código repetido (POST)', async () => {
    const response = await request(API_URL)
      .post('/wp-json/wc/v3/coupons')
      .set('Authorization', AUTH_HEADER)
      .send({
        code: 'Ganhe10',
        amount: '10.00',
        discount_type: 'fixed_product',
        description: 'Cupom duplicado'
      });

    expect(response.status).toBe(400);
  });

  test('CT-08: Deve negar acesso sem autenticação válida', async () => {
    const response = await request(API_URL)
      .get('/wp-json/wc/v3/coupons');

    expect(response.status).toBe(401);
  });
});