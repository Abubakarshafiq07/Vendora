using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Vendora.Application.Interfaces;
using Vendora.Core.Enums;

namespace Vendora.Application.Services
{
    public class TransactionService : ITransactionService
    {
        private readonly List<CoinType> _insertedCoins = new();

        public void InsertCoin(CoinType coin)
        {
            if (!Enum.IsDefined(typeof(CoinType), coin))
                throw new Exception("Invalid coin.");

            _insertedCoins.Add(coin);
        }

        public int GetCurrentAmount()
        {
            return _insertedCoins.Sum(c => (int)c);
        }

        public List<CoinType> Cancel()
        {
            var coinsToReturn = new List<CoinType>(_insertedCoins);
            _insertedCoins.Clear();
            return coinsToReturn;
        }
    }
}
