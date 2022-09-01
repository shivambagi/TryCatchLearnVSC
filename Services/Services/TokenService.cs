using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Models.Entities;
using Services.Interfaces;

namespace Services.Services
{
    public class TokenService : ITokenService
    {
        string ITokenService.CreateToken(AppUser user)
        {
            throw new NotImplementedException();
        }
    }
}