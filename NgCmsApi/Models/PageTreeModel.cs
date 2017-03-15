using System;
using System.ComponentModel.DataAnnotations;
using Newtonsoft.Json;
using System.Collections.Generic;

namespace NgCmsApi.Models
{
    public class PageTreeModel
    {
        [Required]
        [JsonProperty("data")]
        public ContentModel Data { get; set; }

        [Required]
        [JsonProperty("children")]
        public List<PageTreeModel> Children { get; set; }
    }
}