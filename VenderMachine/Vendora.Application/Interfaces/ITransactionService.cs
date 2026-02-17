using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Vendora.Core.Enums;

namespace Vendora.Application.Interfaces
{
    public interface ITransactionService
    {
        void InsertCoin(CoinType coin);
        int GetCurrentAmount();
        List<CoinType> Cancel();
    }
}
