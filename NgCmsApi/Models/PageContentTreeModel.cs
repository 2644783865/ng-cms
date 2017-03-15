using System;
using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace NgCmsApi.Models
{
    public class PageContentTreeModel
    {
        [Required]
        [JsonProperty("data")]
        public List<PageTreeModel> Data { get; set; }
    }
}