// Contrato esperado para o objeto "cupom" retornado pela API

function expectValidCoupon(coupon) {
  expect(coupon).toHaveProperty('id');
  expect(typeof coupon.id).toBe('number');

  expect(coupon).toHaveProperty('code');
  expect(typeof coupon.code).toBe('string');

  expect(coupon).toHaveProperty('amount');
  expect(typeof coupon.amount).toBe('string');

  expect(coupon).toHaveProperty('discount_type');
  expect(['percent', 'fixed_cart', 'fixed_product']).toContain(coupon.discount_type);

  expect(coupon).toHaveProperty('description');
  expect(typeof coupon.description).toBe('string');

  expect(coupon).toHaveProperty('date_created');
  expect(typeof coupon.date_created).toBe('string');
}

module.exports = { expectValidCoupon };