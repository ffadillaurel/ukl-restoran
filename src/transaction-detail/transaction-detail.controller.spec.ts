import { Test, TestingModule } from '@nestjs/testing';
import { TransactionDetailController } from './transaction-detail.controller';

describe('TransactionDetailController', () => {
  let controller: TransactionDetailController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TransactionDetailController],
    }).compile();

    controller = module.get<TransactionDetailController>(TransactionDetailController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
