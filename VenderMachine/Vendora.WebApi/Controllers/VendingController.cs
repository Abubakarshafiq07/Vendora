using Microsoft.AspNetCore.Mvc;
using Vendora.Application.Dtos;
using Vendora.Application.Interfaces;
using Vendora.Core.Enums;

[ApiController]
[Route("api/vending")]
public class VendingController : ControllerBase
{
    private readonly ITransactionService _transactionService;

    public VendingController(ITransactionService transactionService)
    {
        _transactionService = transactionService;
    }

    [HttpPost("insertcoin")]
    public IActionResult InsertCoin([FromBody] InsertCoinRequestDto coin)
    {
        _transactionService.InsertCoin(coin.Coin);
        return Ok(new
        {
            currentAmount = _transactionService.GetCurrentAmount()
        });
    }

    [HttpGet("current-amount")]
    public IActionResult GetCurrentAmount()
    {
        return Ok(new
        {
            currentAmount = _transactionService.GetCurrentAmount()
        });
    }

    [HttpPost("cancel")]
    public IActionResult Cancel()
    {
        var returnedCoins = _transactionService.Cancel();
        return Ok(new
        {
            returnedCoins
        });
    }
}
