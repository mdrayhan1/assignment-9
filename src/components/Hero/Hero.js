import React from "react";

const Hero = () => {
  return (
    <div className="grid items-center my-24 md:grid-cols-2 gap-2 mx-auto w-3/6">
      <img
        src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHwAdAMBEQACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAEAAIDBQYBBwj/xABYEAABAwMBAwUJCgQRDQAAAAABAgMEAAURIQYSMQcTQVFhFBciVXGRk9LTFRZUgZShpLHR4zKSlfAjQlJTVmJjZGVyc3WCg7PBwiQlJjM0NkRFdISisuH/xAAbAQACAwEBAQAAAAAAAAAAAAAAAQIDBAUGB//EADsRAAECAwILBAkEAwEAAAAAAAEAAgMEERIUBRMhMUFRUlORodEVFmHhBiJiY4GSorHwMkJx8SMzQ8H/2gAMAwEAAhEDEQA/API+brMu7YS3OyhPFq1sRt/d/OXtt+SwhlXNsIUcurA8BBI1A8lUx8bYpCIB1nQNJUXQ8mRWO3VrgW25sMQWBFeVHSuVES8XRHdP6UKPZg1nkI0SLCJeaiuQ0pUJQ2l2VZrmjW6qtxacAsIKApQQTkpzoT5KKpYpN5qiqMWlzVFUYtObC21BbZUlQ4KScEUVQYajUkD8IgdpNPKqzYbnITct9Cs+TWihUbbNBqkkoJA1BPDIxmiiA5pyFSL317u+pRwN0ZPAdVKqni03coTsJblCLK9EsNqtl9S+8zAajxo+A5IkkNoTngMg8ayTE5CgENIJJzAZSk4PZnKzW0lods95kQ3mwjdO8jd1CkHgRU4MeHHZjIZyLTC9ZoKitluMx0hLjLe4N4l5YSk9mf7vNVzRayIiubDbadmVnLiuXO9Oy3YeEOL3lMxmHUI4Y0JGOOvGlBljDYGVrTWsV+gtbRtUOjZm5OaBjd04uFKQfnJ+arcSdaXaUPZKLZ2LuDmOcejNDs3l/wBwpiD4qt2EtTUexsGk45+e4esNtBP15qWKaqXYQjHNQKzb2FtGE7wlLISASXiMnpPg4qQY0aFSZqMf3I1jYmxJ428L/lHFr+s07IUDGeRQlWMbZWytEbtph47WUn66dkKOMeMxV6xbbQ3gNWxhH8VpI+qigSL3HOUPfrXHlWa4smO26DHcLSVJ4KCSUkduQKKJAleESlJffU8hO6hfhBPUKyVyr0jW+qFpmdj2V24zot1hXB2O0H5MKOfDS304PSR0jArn38tihkSGWgmgJ1qouNaUosoUDOnDozW+qvsFXNvnuMsogyFrVbFyEPSI6cfomCM6+QVniQmuNsfqoQDqV7oQPraVb7fmU7tRJ7taDRSlCWmwQdxvHgjQ4rPg0MEs2ya6/wCdKjLNGLFFDstDKb42HkYV3MXmvj3cHy4J89daDpXNwtWjaZsq3CY+TkjU8avXFTZkiFbWkuT5TMdCjhJcWE5PZ10IRcVcaRAM9iQ05ESCS8hYKQBnOvZg0ITo8y3PQXJzU1hcRvIW+lYKE46z8dCFN7o2tqC3PcuEVMNxW6h8ugIUddAfiPmoQiHLja4zjDci4RWlvp32krdAK09Y6xQhPiXqxyGn3Y92hONx077ykPJIbTnGSegZoQrW2uRbjFTJgSG5DC8hLjSgpJwcHUdtJCsExAsFKhorQ0IXzvFs7aLszb7m+ILJUpKnlDe3EjeAOPKnFYJhzmBzmtqRo1r08BxdLtc0VNFcTtqEMRJNvstrgQm3EFhcplB5x1HAnJ117cnWueySq8RIzy456HMD5JtliSHOKynN10KrTZRKRSWiielPVTqnZVxsmdzaSCOh3nGz8aCfrSKugn1lycMs/wALT4r05uNWpebXnsWEztTynXCPcUc9Dt7SkpZJODukJ+tRNJNQ7JINtuG2lgQSY7MWQ42D+l3cp+cEeahCn2XazyMXleOCnf8ABQhDX1vHIlZV9csfW7Qheg3izbPHZJi97QwWpAhW5BTvqIz4IwkYI1KiB8dCFitjdnlNcl+1N+fb5sz46wwgaBLaCTkeVWR/RoQvReRqLjk7tR/Vc6rzuKoQt2hgChC+bdsIgh7W3phIwEzXFYP7Y7/+KskX9a9Rgw1lm+FfuqlyO62hC3GlpQ4MoUpJAUOw9NUggkgHMt4poUW6KadEQlSQypBbSVFQO/0gYOnz/NQrLBrVE9wTBFEoxJAjHg9zStw/0sYqAistWLQrqrlSDm2rNcqnsznMXu2O/qZjST5FKCT8yjWiEaPCw4UZWUdTwXtzUbdIJSDjorYvIry6NIjbIcrd0XeF9zQ7gypbb6gd3wiFZ06MpUKSafye257aK87Y3thtYjTWn40Zak4Cy4SfmAT56EKjsW0lst/JTe7JLdU3dFPKQiMpBClbxSM9Wm6rPk7RQhXW2kB2DyF2BD7RacMhpRQRgjeS4oZ7cEUIUvK1emzZNmdl0yUx0yWGH5jys4bRgJTkDiM7yj/FFCFt1bQbETdiLlaoN0KrbCt/NPlhtW+22RuAjeTgqJ+c0IV1yaLtStiramxOyHYCErS2qSkBzO8chQGmQc0IWooQvB+UBMeFymyXpLRcYK48h1sfphuhJ/8ASsU41zmEMyEheiwSC6Xe1ufr/SnmX8XjZ+8uSSmSEymzFhrCQppoHJVga4xoT9tcKFK3eYhWRTIanQTqWgS+KisAyZMp8VgCNdMAdldldKypAmogqyi9HsU5TURtN5u/POPxFNotfNYCU4wCvqOPOD01x3yojxbMFlmhrbr9lyI0PL/jZQA5+izDlgeYZceaktOOsILqEYIKlJG8B5wK77B6wVk5MB0u8WdBXuzTIWkLTqlQyD2Gti8koLps5a72ylq7W+PLQnO7zqMlOeODxHxUIVPsvyftbMXpcm2XWcLWttQFsccKm0rJHhA56s9GcnjQhXUjZHZyTcPdCTZIDsze3i8thJJV1nrPaaEI66Wm33eOmPdYTExhKwsNvthaQoAjOD04J89CEHO2U2fuLjbk+ywJC220tIU6wlRSgcEjPQKELsTZXZ+E1IaiWWAy3Jb5t9LbCQHEdStNRQhH263w7XDbh26M3GjNjCGmk7qU65+uhCJoQvHOVm1c9tU5MQ8gYtzalo6fBU5WeMF3cDRQCW0z0/OZWEhT5duU+YTxbL7RacwAcpPEVhiwocWlsVplC774TYlLQzIHdxoKnVWUUgSDoaQNFZRG3CdLucjuie8Xnt0J3iANBw4VCFCZCbZYKBQhwmQhZYKBPtZQ1cYqlq5tvnkBxQOMJ3hnPZirgcoKUdhiQnNz1B+y+gNkXlSdl7S+6AHVQ2ucGc4WEgKHnBror5+rehC6KEIeTMiRATKksMj90cCfroQqdzbbZhCglF8hPrPBEZznlE9QCMkmlUKTWOcKgEoF7lFsLZUlrux1aeKDHUyc/wBbu0i9o0q9klMvFWsPBBOcpcPc3m4gbJ4CRIB/sQ5SMRmtXtwXOO/Z9h9ygl8pKlo/10BhXU2w/I+dQb+qo45itGBZw5wB8R/4g18oHOeC7c7kD1xoLDSf/NThqOPbqVvYUxTK4c+iyMtp3aLaJfucp5bkkYU4+4SopA1KyOjsAxwAFY5qZbDYYj8wXZl4LJGX9b+yjbhsFIZiPOwrgzLeZGXGQndPkGp17DiuTDwsx7wHsLQcxSZhBpcA5tAVi8Z1HCuoulRTpWQyWt1O6VBWca6Z6erWlVTsZaq72dtkKRGnT7mt0xYSUlTLBAW4VHA48BWSajRGuZDhfqdpOhZZmLEY5sOHncnbS2uPa5zKYil8y+wl5Lbp8NvOdDTko7ozDbzgkZMx8USkZ0VhtZwaeBRWyF7u0CdDt0W7riW9yQN9tTSXEp3jrjIyMk9eMnPXXUhxjkaVz5/BcItfGYPWpWi9SY2qjWzYq33m/S2y67EbcUUY/RXFJBIQB2mtTnALzECA+M6jfidA/OOpeQXa+3PaCe/OnSJDLTpw1EQ8pKG0dAIB1PXmsr4prkK9VK4MghgL2V/n7nxOrQKDWh7cWoEkvsxmSspKdU1C2a5VtMnBs2WtA/gLS2aaq6SXIz5RGZDC1rdSfCSAOjPTrWeamnQYdprak5B/KzR4OIaHNymoyIO+W6M3Di3GDIfdjySpOH04WCOntFUy0zFfEdCigWm6syul4ry90J4AI1Kl3a2rZRdyQ0tvCcKIJJGoxnh56ErOWqiKaSdFPb50q2SDIgu806UlG9ug6Hy+QVVGgw4zbEQVCriwWRW2XioWptLkXZax+7LzhfuFxRltvOnXr5wSfiFciNjJuYxLRRrPz+uK5kZr5uNiW5Gt/P6Xn6hqSQNda7FV2bKkAxUFZROA0IPA8aaVMtVc3qcxPYhOlbrtwDQTIcIARjGiRjpHTWeBCdCc4ClnONddKyS8F0Jzh+3RrVYO2tNVpom9zNFaVlOSnO6CSQnPHA4DjU7bqKgSkFrrQb4/HXTNXxRSUJLSllYCgoAJ6+38+ukrctaJAU6pp27kVJNXN2kJnIteZbZSmOEKQhBSlg9uTqT2dVZJSFi3RPVpU5zpWKBDMLGerp4qo3a2LZRLdoQmlNJC482lO7urCt5OTjoPVQUNy6EVdpltkWyCxCt5Ykspw89p+iadmp1114VhhQ4zYr3PfUHMFRAhRmRXOe+oOYfmZUZGtXrWt13tWx/zi4eib9WuKcLxh/xH1Ly99md7yb0Xe9wz47n+ja9WoHDbxkMMc+qL3N73kOi6OTlnx3P/ABGvVo7cfuxz6ovc5veQ6Jw5OGvHlw9G16tHbb92OfVK9ze95Doujk4ZPC+T/RterR24/djn1Svc3vOQ6J3e5a8ez/RterUu3H7sc+qV7m95yHRd73Lfj24eja9Wn22/djn1RfJvech0TxycN+Prh6Nr1afbb92OfVRvk3vOQ6Lve3R4/uHo2vVqXbUTYHPqlfZvech0Xe9ujx/cPRterT7aibA59UX2b3nIdF08mo8e3H0TXq1M4WjD/mOfVK/ze85DouHk3R03+4eia9WoHDMTYHPqnfpvech0TFcnDfj64eja9WonDT9gc+qkJ2b3nIdFCvk4Z8dzz/VterUDht+7HPqp3yc3vIdFF3uGPHU/0bXq1Htx+7HPqp3qa3h4Dot8JLv5iubfIiyYpqAelvLL7kdpkMtOpbckSn+Za5xRACAd1RJypI4Y1xnOQOjK4IjTrccSGgqiJMthGyMqO9zb/wDA7b8vX7GtXduJvBw81XfRqXRbtoEnIh2zP/Xr9jTb6OxGmoiDh5pGcB0JC3X/AOB235ev2NLu3E3g4eaL4NlJUC/pSSYdtwP3+v2NPu5E3g4eaV8GpV0m6P29aPdOK2hlSglT0d8uhvPSoFKSE9ozjicDJFUbAEaHDLmuBpoUmzbSaEUR0yYphbLTbK333chDSMDQDKlKJ0SkDiT2AZJAOCTlIk6+yzQM5VkSI2GKpQTdp8dMmExan2VcFouCyP7Guv3fibY4LPehqRHcl/H/AANt+Xr9jQPR+IP3jgkZkalJzW0XwG2/L1+xrV2XM7wcFDHN1Jiot/USe4LaM/v9fsazvwFEc4m2OCmJkAZkDNcu0QZfgwiBxDU1Sj8WWwPnFQPo/EP7xwKkJsDQuQZzc6KmQwFAZIKVjCkKBwUkdYP/AMyK4MxBiS0UsdnC2w3B7ahPPHgayq5UPvTtv69c/wApP+vW7tGNqb8reipxDfHiVMY8ZiwrsEt64RYyHnHWJbDC5Klhe+QFYClBSVLzkjXA1yTj1ODsKy8SC0RHBrhn0D4aFzo0u9rjQVC0kPaezxmeb3pp8JSvAtElI1UTw3O2uhfpXet+YdVTin7JU/vvs/XcPyZJ9nRfZXet+YdUYp+yV3332fruH5Mk+zovsrvW/MOqMU/ZKEuO11vWyUsJuCj2WyT7OnfZXet+YdUYp+yVi7o7Lv2/DhRJaQ9ltb0iMtlDaSMFXhpGdOgZyeriKJjCkrBYXWwToAy/ZSZAe45lc2+1MWCb3XFTNkMOx1xn0rfW+4hKikhaQonhu6pGpz04AriYLwq0RC2PQA6QAMvjRaY8uaVajNmp9nsUZLIfnv4Ru7xs0lJ4k8dwnGvA51J8leivktvG8R1WTFv1FXXvttP8I/kuV7Oi+S28bxHVGLfqK777LT1XH8lyvZ0XyW3jeI6osP1Jju11sDZ5tNxKv5rlezovktvG8R1SsO1LK3i+iUrdjRrktR6Pc99OvlKAKDOyoFTEbxCeLfqQNu2VbeYXKuipjUqQsuKaZmuIS2MAAEIUBnAGT19JrymEMKmJHJg0LfFoNeIqt8CXo31s/wDKI96dt/Xbn+Un/XrB2jG1N+VvRaMQ3x4lc98j+M+9m/Y/kGvaU7i3PjmcT0Sxx2T+fFFRyibao10mI5gy55ipRNKg3DSkqT4aUrAKlFGMlWhWnHDX1eDcHS8OA0kBxOWufhVc6NHe5x0LUw7DZZMVp8QGsOJCgEvFQ+Ig4NdC6y+wOAVNt2tTe9mzfAU/jq+2i6y+7HAItu1pe9mzfAU/jq+2ldZfdjgEW3a1HK2fsjDRUYSM/wAdX207rL7scAi27WsVtC6xam3Jdu3mHI4Lm6HVFKwNSlQJIwcYzxHRVEfB0tGhlpYB4gAUUmRXtdWqKt892+Tu43oNytrLcZyStMjdbVICd0BKShRO7lWSQQfwRwJriYKwZCMRzojmvpoFeJqAtUxHdQACiP2OYtt6ghyRCirXuBQejuqCHQQDlKSsnAJKc5OqTXorrL7tvALHbdrWh97do+BD8dX20XWBsDgEW3a0ve3aPgQ/HV9tF2gbA4BFp2tI7OWdKSTDGB+6K+2i7QNgcAi07Ws7e4VrZCgzHLZ6FIeWkjyEGi6wD+wcAi24aVn7ftJKQh2Mu03W4KYdLYkx2m1JWMAjJKx4QBAOnRXk8IYMhsmCGRGtB0GteQK6ECO4syiqI98r/wCxq/ega9pWC4s3zOJ6LRjjsn8+Kvxwx0VgqaUV1FC2mTFddcgS1Mc8QXGyhK0KPDeweBwBwPRrmurJ4YmJVmLFCPHQs0WVZENrSpxNvAGlyR8lTWzvHMbDefVVXFmtLu68+MkfJk0d45jYbz6ouLNa73defGafkyaO8cxsN59UXFmsoeUu6yk4cumn7WOkUd45jYHPqi4s1lVvuCh6Qh2fLekpQoKDRSlKSRqM4GT5M4681THw9MxoZYABXUpMk2NNc6tZDRdW06284y+yctPNkZT1jUEEEcQQR8YBHPlJ2NKvtwz4ZdSuiQWxBQqVMu7p0FyRoMf7Kiuv3jmNgc+qz3Jutd7svHjRHyVNHeKPsDn1SuTda73ZePGifkyaO8UxsDn1SuTdaa5Ku7id03UAdkZNHeKY2Bz6p3JutVEy0yZeQ9dnsHjuMoB+o0d45jYHPqmJJutHQIjFvjIjxUlDaMkZOSSTkknpJOtcONMRI0UxXn1itbIbWNshTHXjVCsXndl5SbhfHH0WzZjnSw2XHP8AOAG6keVFep7te9+nzXOv3s80Vcdur5Z45l3PYx1qOnipVwTpkgdCOsipM9HAHVMSvw80jPEjIFUHlnZ1/wBGjnr90Pu6tPo7DI/VyPVRvrtSi78o8QfTvu6o7te9+nzU797PNLvyjxB9O+7o7te9+nzRfvZ5rvflTj/d/Xo/y77un3ayf7eXmi/HZS78o8QfTvu6Xdr3v0+aL97PNLvyjxB9O+7o7te9+nzRfvZ5pd+UdOz+f+++7pj0ay/7eXmi/HZS78v8AfTvu6O7XveXmi/eyl35v4A+nfd0u7Xvfp80X72eacjlnSDlWzxUOru77upw/RsNdV0Svw80nTppkCnZ5XzJCwxsxkpHTcgMedGtWO9HYZBAdy81ETrq5l08qsjd3js6jH85o9SqO7Xvfp81O/HZ5oXvyD9j/wBO+7o7te9+nzRfvZ5rzez3q52ZTqrXMdjF0BLhbP4Q/MmvUrnoybtZe7jb3bfPnLkMPKSpXOAEjdOdD0a48woQqI8aEJUISoQlQhKhCVCEqEJUISoQlQhGQ7jLhtKajPbiFnwhug50x0ihCIVfLmseFKJ0I/ATw07OwUIVcBoONCF//9k="
        className="max-w-sm w-full rounded-lg shadow-2xl"
      />
      <div className="w-full">
        <p className="py-6 w-full">
          In this article we'll talk about the definition of a quiz. A quiz can
          be defined as a game or brain teaser to test knowledge.
        </p>
      </div>
    </div>
  );
};

export default Hero;
