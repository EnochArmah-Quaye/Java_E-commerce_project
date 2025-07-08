package com.ecom.productcatalog.model;


import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.annotations.Cascade;

import java.util.Set;

@Entity
@Data
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;
    private String name;

    @OneToMany(mappedBy = "category",
                 cascade = CascadeType.ALL,
                  fetch = FetchType.LAZY)
    private Set<Product> products;

}
