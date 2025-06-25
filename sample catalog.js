  const validCSDKData = {
    currency: {
      code: 'USD',
      symbol: 'US $',
      formatString: "'US$'#,##0.00",
      precision: true,
      delimiterValue: '.',
    },
    offers: [
      {
        productId: 'test-product-1',
        productName: 'Test Product 1',
        commitmentVariants: [
          {
            commitment: 'MONTH',
            term: 'MONTHLY',
            productId: 'test-product-1-m2m',
            offerPriceDisplay: {
              displayUnitPrice: 9.99,
            },
          },
          {
            commitment: 'YEAR',
            term: 'ANNUAL',
            productId: 'test-product-1-puf',
            offerPriceDisplay: {
              displayUnitPrice: 99.99,
            },
            strikethroughOfferPriceDisplay: {
              displayUnitPrice: 119.88,
            },
          },
        ],
      },
      {
        productId: 'test-product-2',
        productName: 'Test Product 2',
        commitmentVariants: [
          {
            commitment: 'MONTH',
            term: 'MONTHLY',
            productId: 'test-product-2-m2m',
            offerPriceDisplay: {
              displayUnitPrice: 19.99,
            },
          },
        ],
      },
    ],
    metadata: {
      version: '1.0.0',
      timestamp: 1234567890,
      locale: 'en-US',
      country: 'US',
    },
  };







