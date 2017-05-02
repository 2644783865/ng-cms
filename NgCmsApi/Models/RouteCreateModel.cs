using System;
using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace NgCmsApi.Models
{
    public class RouteCreateModel
    {
        [Required]
        [JsonProperty("path")]
        public string Path { get; set; }

        [JsonProperty("parentRouteGuid")]
        public Guid? ParentRouteGuid { get; set; }
    }
}
