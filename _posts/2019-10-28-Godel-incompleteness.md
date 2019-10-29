---
layout: page
title: "Godel's incompleteness theorems : ignorance is a part of maths"
date: 2019-10-28 18:00:00
categories: maths
use_math: true

---

For millenia, logic has played a central part in the development of knowledge. We use it to decide
what is right or wrong in everyday life and to expand the realm of truth in Science and Mathematics.
We consider logic to be universal, so much so that we often take it for granted. Although it seems
sufficient to deal with most of the problems we encounter, how do we know logic itself is right? To
answer this we need to know how to talk about logic "logically".


Photo by Pixabay on Pexels.com
At the core of logic is the formal proof. It is a sequence of sentences in formal language. In order
to determine whether the proof is valid or not, we will resort to axioms (sentences that are always
true) and inference rules (a mechanism through which a sentence can be deducted from one or more
preliminary sentence(s) known as premise(s)). We will refer to a combination of formal language,
axioms and inference rules as a formal system.

This is what it might look like in natural language :

<center><em>All beings are made of atoms</em></center>

<center><em>Reggie is a being</em></center>

<center><em>Reggie is made of atoms</em></center>
In this example we have taken "All beings are made of atoms" and "Reggie is a being" as axioms of
our system, and the inference rule we used is simply the fact that if a property is true for all
members of a class, then it must be true for a particular member.

The point here is not to argue about the truth of the axioms but more so to determine whether
a proof is valid or not.

## A very brief history of Formal Systems

From the end of the 19th century to the middle of the 20th century, many mathematicians worked on
formalizing Set Theory, from its inception by Georg Cantor to later work by various mathematicians
including Gottlob Frege, Bertrand Russell as well as Ernst Zermelo and Abraham Fraenkel who gave
their name to ZF(C) (Zermelo-Frankel set theory)which is still in use today.[2]

When in the year 1900 the mathematician David Hilbert published a list of 23 problems [HP], the
notion was that with a suitable formal system, all of the statements in mathematics could either be
proved right or wrong. There is no ignorabimus, we can always find out whether a formal sentence is
true or false. This is what we call Completeness. Hilbert's 10th problem in fact asks for
a construction of the solution for a specific class of equations, the Diophantine equations,
assuming that there had to be such an algorithm. In his second problem, he also asks for a proof of
the Consistency of the axioms of arithmetic, meaning whether it would be impossible to prove
a sentence in arithmetic and its opposite. The promise of finally filling the gaps in mathematics
seem to have appealed to young Kurt Gödel and he started his PhD thesis with the intention of
contributing to Hilbert's dream.

## Gödel numbering and representability
Besides consistency, there is another notion which is central to understanding Set
Theory: representability. A weakly representable set has a corresponding formula. A given integer is
in the set if and only if we can prove the formula to be true for that integer. This essentially
implies that there is a method to enumerate all elements of the set, but we might not necessarily be
able to prove that an element is not in the set.

To enable talking about logic within the language we introduce Gödel numbering, the association of
any formula of the formal language with a natural number. This is today quite intuitive as anything
we represent in a computer is in binary code. Let us not explain exactly how this is done and assume
that there is such a mapping. More interestingly, proofs are also represented as numbers...

> TODO : notation Gnumbers}

One key aspect of this is that we can validate / invalidate whether a sequence of statements

The question of whether a number is in a set could be answered by proving that a specific formula is
true for the number x.

{% raw %}
$$x \in S_A \iff F \vdash A(x) $$
{% endraw %}
Here we have introduced several notations : $F$ is the formal system that we're working with, and
$A$ is a formula that has a value of True or False for every integer, and corresponds to the set $S_A$
Here, $F \vdash A(x)$ indicates that it is possible to prove that $A(x)$ is True with the axioms and
inference rules of F.
The $\iff$ symbol indicates the provability of $A(x)$ for all elements of the set $S_a$. This
property is known as weak representability and is very important for what follows, as it establishes
a bridge between Set Theory and the formal system.

Note that now that we can now use formulas as arguments of other formulas thanks to Godel numbering.
We could for example define the set of all provable sentences, and find a nice formula that can only
be proved to be true for the Godel number of provable statements(formulas). And so, we define 
provability as a formula of the language! [^1]

$$ F \vdash A \implies F \vdash Prov_F(\ulcorner A \urcorner) $$

[^1]: For the sake of brevity, we'll have to take the existence of that formula as given


# The Diagonalization Lemma
With Godel numbering, we can now write equivalent formulas, but using numbers as representations of
formulas!

Photo by Pixabay on Pexels.com
Since we can work with formulas as variables, it would be a shame to stop here. It turns out that
for any formula of the language of F (with only one free variable), say A(x), it is possible to
construct a sentence for which provability is equivalent to the formula. If D is provable, then
A(⌈D⌉) is true, and if it is false then D is not provable. That sentence's provability is
inextricably linked to A's true value. This leads us to Gödel's incompleteness theorems.
$$ F \vdash D \iff A(\ulcorner D \urcorner) $$

## Gödel's First Incompleteness Theorem

Assume F is a consistent formal system which contains sufficient arithmetic. TODO : explain
arithmetic F,A, [], Then we can construct a sentence GF of the language of F such that GF is true
but not provable. This is a direct application of the diagonalization lemma to the negation of the
provability sentence defined earlier. In short, the sentence is telling us "I am not provable". We
cannot prove that sentence since that would mean the sentence is both provable and non provable.
Seeing as we assumed that the system was consistent, that sentence must be true and therefore not
provable.

## Gödel's Second Incompleteness Theorem
We proved that consistency of the system implies that the Gödel sentence is true but unprovable. We
can see that the system can prove that consistency implies the Gödel sentence's truth. This means
the consistency of the system cannot be proven, since doing so would prove the Gödel sentence.

An interesting use case for incompleteness

Maybe all of this is fine, there are indeed sentences that must be true but we can never prove. What
if we had a way of showing some formula is not provable? We do, it is called regular proof with the
provability formula as the last sentence. If we do that, then can we deduce that it is true or
false? Depending on the nature of the sentence this unprovability result might actually lead to
a proof by contradiction...

If the formula is an existential formula of the form !∃x A(x), it being unprovable would mean that
it must be true. Indeed, if it were false, we could find an x that satisfied the formula A(x), and
hence it would disprove the sentence(no matter how difficult to find x is). In this case the
unprovability of the sentence lead to its proof.

## Incompleteness vs Decidability

We've seen that there are theorems that cannot be proven. A theorem will be recursive if there is
a way of verifying it. A theory is called decidable if the set of its theorems (sentences derivable
in it) is decidable. Incompleteness opens the possibility to undecidability. Decidability is
a stronger form of completeness. Undecidability of systems with sufficient arithmetic can be proved
in a similar fashion to Gödel's theorems. Credit goes to Alonzo Church and Alan Turing for that
proof[5].

## Superiority of the human mind to formal systems?

One could conclude from Gödel's theorems that a mathematician is capable to find a sentence to be
true where formal systems are failing, and therefore no formal system can be devised that can
encompass the mathematician's knowledge and human intelligence. However, the GITs are just another
set of theorems, and given that theorem and all notation related to Gödel numbering, a formal system
could just as well reason about the previous example...

It is useful to remember that the system needs to be consistent in order to find a non-provable
sentence. From the second theorem, consistency can never be proven in a consistent system with
sufficient arithmetic, and neither can humans see it to be consistent... Should we think about
replacing logic then? We are working on a system that wasn't designed for such introspection in the
first place, it works well for most useful cases. We have found that we cannot always prove the
truth, yet on that journey we used the very system, that we are trying to understand better. Better
yet, by using the incompleteness results, we could potentially prove more theorems than without
it... Decidably strange!

It seems the truth of the Godel sentence could almost depend on your philosophy. It is a singularity
which taught us a lot about the mathematics we use day in and day out. No betterment in the axioms
or inference rules of the system will fix that. So we all could look for an alternative system that
will always be right... or accept that some truth is beyond our grasp. We don't know and we will not
know

[1] Hilbert Program

https://www.ams.org/journals/bull/2000-37-04/S0273-0979-00-00881-8/S0273-0979-00-00881-8.pdf


[2] Zermelo-Fraenkel Set Theory 
[2] Proof Theory 
[2] Goedel's Incompleteness Theorems
Introduction to Automata Theory, Languages, and Computation (3rd Edition)

